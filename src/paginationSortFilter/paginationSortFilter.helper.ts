import { isEmpty } from 'lodash';
import { Validator } from '../validator/validator';
import { ValidatorParameter } from '../validator/validatorParameter';
import * as validatorRules from '../validator/validatorRules/validatorRules'
import { FilterQuery, Model } from 'mongoose';

export type PaginatedResponseModel<T> = {
  data: T[],
  pageSize: number,
  pageNum: number,
  totalPages: number,
  totalItems: number
}

export type QueryParamsModel = {
  pageNum?: number,
  pageSize?: number,
  sortBy?: string,
  sortOrder?: 'asc' | 'desc',
  filterBy?: string,
  filterValue?: string,
  languageCode?: string,
}

export class PaginationSortingFilterHelper {
  public getRequestQueryParams(query): QueryParamsModel {
    const queryParams: QueryParamsModel = {
      pageNum: +query.pageNum || 1,
      pageSize: +query.pageSize || 100,
      sortBy: query.sortBy || '_id',
      sortOrder: query.sortOrder || 'asc',
      filterBy: query.filterBy,
      filterValue: query.filterValue,
      languageCode: query.languageCode || 'en',
    }
    return queryParams;
  }

  public async handlePaginationSortAndFilter<T>(collection: Model<any, {}, {}, any>, queryParams: QueryParamsModel, validator: Validator, query: FilterQuery<any> = {}) {
    let { pageNum, pageSize, sortBy, sortOrder, filterBy, filterValue, languageCode } = queryParams;

    // sort
    const sortByModelReference = collection.schema.path(sortBy);
    const sortByErrMsg = 'sortyBy value is invalid';
    const sortByModelRefValidator = new ValidatorParameter(sortByModelReference, 'sortByModelReference').addRules([new validatorRules.NotNull(sortByErrMsg), new validatorRules.NotEmpty(sortByErrMsg)]);
    validator.validateAndThrow([sortByModelRefValidator]);
    const isSortOrderValid = sortOrder === 'asc' || sortOrder === 'desc';
    const errMsg = 'sortOrder value should be either desc or asc';
    const sortOrderValidator = new ValidatorParameter(isSortOrderValid, 'isSortOrderValid').addRules([new validatorRules.NotNull(errMsg), new validatorRules.IsEqual(true, errMsg)]);
    validator.validateAndThrow([sortOrderValidator]);

    if (!isEmpty(filterBy) && !isEmpty(filterValue)) {
      filterBy = filterBy.trim();
      filterValue = filterValue.trim();
      const filterByModelReference = collection.schema.path(filterBy);

      const errMsg = 'filterBy value is invalid';
      const filterByRefValidator = new ValidatorParameter(filterByModelReference, 'filterByModelReference').addRules([new validatorRules.NotNull(errMsg), new validatorRules.NotEmpty(errMsg)]);
      validator.validateAndThrow([filterByRefValidator]);

      // eslint-disable-next-line dot-notation
      const fieldType = filterByModelReference['instance'];
      query = {
        ...query,
        [filterBy]:
          fieldType === 'String'
            ? { $regex: new RegExp(filterValue, 'i') }
            : filterValue
      };
    }
    const numberOfDocuments = await collection.countDocuments(query);
    const skips = pageSize * (pageNum - 1);
    const data = await collection
      .find(query)
      .collation({ locale: languageCode })
      .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1, _id: 1 })
      .skip(skips)
      .limit(pageSize)
      .lean();
    const paginatedData: PaginatedResponseModel<T> = {
      data: data,
      totalPages: Math.ceil(numberOfDocuments / pageSize),
      pageNum: pageNum,
      pageSize: pageSize,
      totalItems: numberOfDocuments,
    };
    return paginatedData;
  }
}
