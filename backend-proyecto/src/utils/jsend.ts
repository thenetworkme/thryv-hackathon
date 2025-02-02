export interface AppResponse {
  statusCode: number;
  body: string;
  headers?: {
    [key: string]: string;
  };
}

interface Body<T = any> {
  status: "success" | "fail" | "error";
  data?: T;
  message?: string;
}

export class JSend {
  static success<T>(data: T, statusCode: number = 200): AppResponse {
    const body: Body = {
      status: "success",
      data,
    };

    return {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      statusCode,
      body: JSON.stringify(body),
    };
  }

  static fail(message: string, statusCode: number = 400): AppResponse {
    const body: Body = {
      status: "fail",
      message,
    };

    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode,
      body: JSON.stringify(body),
    };
  }

  static error(message: string, statusCode: number = 500): AppResponse {
    const body: Body = {
      status: "error",
      message,
    };

    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode,
      body: JSON.stringify(body),
    };
  }
}
