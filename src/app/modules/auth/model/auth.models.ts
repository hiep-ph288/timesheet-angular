export interface IAccount {
  usename: string;
  password: string;
}

export interface IAuthError {
  title: {
    code: number;
    details: string;
    message: string;
    validationErrors: null;
  };
}

export interface ITokenAuth {
  status: number;
  result: {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
  };
  targetUrl: string;
  success: boolean;
  error: string;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}
