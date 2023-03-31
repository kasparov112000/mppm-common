import { isEmpty } from 'lodash';
import { Validator } from '../validator/validator';
import * as validatorRules from '../validator/validatorRules/validatorRules'

export class PaginatedData {
  public data: any[];
  public pageSize: number;
  public pageNum: number;
  public totalPages: number;
  public totalItems: number;
}

export class PaginationParameters {
  public pageNum?: number;
  public pageSize?: number;
  public sortBy?: string;
  public sortOrder?: string;
  public filterBy?: string;
  public filterValue?: string;
  public languageCode: string;

  public getPaginationQueryParams(query) {
    const paginationObj = new PaginationParameters();
    paginationObj.pageNum = +query.pageNum;
    paginationObj.pageSize = +query.pageSize;
    paginationObj.sortBy = query.sortBy;
    paginationObj.sortOrder = query.sortOrder;
    paginationObj.filterBy = query.filterBy;
    paginationObj.filterValue = query.filterValue;
    paginationObj.languageCode = query.languageCode;
    return paginationObj;
  }
}

export default class Pagination {
  private _validator: Validator;
  private _serviceName;

  constructor(serviceName: string) {
    this._serviceName = `${serviceName}_Pagination`;
    this._validator = new Validator(this._serviceName);
  }

  public async handlePaginationSortAndFilter(collectionName, noSQLModel, paginationParameters: PaginationParameters, db, query = {}) {
    this._validator.rulesFor<string>(collectionName, 'collectionName').addRules([new validatorRules.NotEmpty()]).validateAndThrow();
    
    let { pageNum, pageSize, sortBy, sortOrder, filterBy, filterValue, languageCode } = paginationParameters;
    if (isEmpty(languageCode)) {
      // If languageCode not provided then english should be the default.
      languageCode = 'en';
    }
    if (isEmpty(sortBy)) {
      sortBy = 'name';
    } else {
      sortBy = sortBy.trim();
      const sortByModelReference = noSQLModel.schema.path(sortBy);
      
      const errMsg = 'sortyBy value is invalid';
      this._validator.rulesFor(sortByModelReference, 'sortByModelReference').addRules([new validatorRules.NotNull(errMsg), new validatorRules.NotEmpty(errMsg)]).validateAndThrow();
    }
    if (isEmpty(sortOrder)) {
      sortOrder = 'asc';
    } else {
      sortOrder = sortOrder.trim();
      const isSortOrderValid = sortOrder === 'asc' || sortOrder === 'desc';

      const errMsg = 'sortOrder value should be either desc or asc';
      this._validator.rulesFor(isSortOrderValid, 'isSortOrderValid').addRules([new validatorRules.NotNull(errMsg), new validatorRules.IsEqual(true, errMsg)]).validateAndThrow();
    }
    if (!isEmpty(filterBy) && !isEmpty(filterValue)) {
      filterBy = filterBy.trim();
      filterValue = filterValue.trim();
      const filterByModelReference = noSQLModel.schema.path(filterBy);
      
      const errMsg = 'filterBy value is invalid';
      this._validator.rulesFor(filterByModelReference, 'filterByModelReference').addRules([new validatorRules.NotNull(errMsg), new validatorRules.NotEmpty(errMsg)]).validateAndThrow();
      
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
    const numberOfDocuments = await db.models[
      collectionName
    ].countDocuments(query);
    if (!isNaN(pageNum) && !isNaN(pageSize) && pageNum > 0 && pageSize > 0) {
      const paginatedData = new PaginatedData();
      const skips = pageSize * (pageNum - 1);
      paginatedData.data = await db.models[collectionName]
        .find(query)
        .collation({ locale: languageCode })
        .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1, _id: 1 })
        .skip(skips)
        .limit(pageSize)
        .lean();
      paginatedData.totalPages = Math.ceil(numberOfDocuments / pageSize);
      paginatedData.pageNum = pageNum;
      paginatedData.pageSize = pageSize;
      paginatedData.totalItems = numberOfDocuments;
      return paginatedData;
    } else {
      const data = await db.models[collectionName]
        .find(query)
        .collation({ locale: languageCode })
        .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1, _id: 1 })
        .lean();
      return data;
    }
  }
}
