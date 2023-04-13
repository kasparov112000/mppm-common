export const httpStatusCode = {
    // 1XX - Informational
    Continue: 100,

    // 2XX - Success 
    OK: 200,
    Created: 201,
    Accepted: 202,

    // 3XX - Redirect
    NotModified: 304,

    // 4XX - Client Error
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    RequestTimeout: 408,

    // 5XX - Server Error
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504
  }