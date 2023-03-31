export class ResponseModel {
  code?: 'success' | 'error'
  errorDetails?: any
  data?: any[] | any
}