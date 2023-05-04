import { Response } from 'express';
import { httpStatusCode } from './httpStatusCodes';

export class ExpressResponseHandlerService {
    private _logger: any;

    constructor(logger: any) {
      this._logger = logger;
    }

    public handleError(component: string, error: any, res: Response, message: any): Response {
      const status = Object.prototype.hasOwnProperty.call(error, 'status') ? error.status : httpStatusCode.InternalServerError;
      const responseMessage = Object.prototype.hasOwnProperty.call(error, 'message') ? error.message : 'Internal Server Error';
      const validatorFailures = Object.prototype.hasOwnProperty.call(error, 'validatorFailures') ? { validationFailures: error.validatorFailures } : {};

      const msg = `${message} - ${responseMessage}`;

      const correlationId = '';

      this._logger.error({ component, message: { msg, ...validatorFailures }, correlationId });
      return res.status(status).send({ message: `${component}: ${msg}`, code: 'error', ...validatorFailures });
    }
}
