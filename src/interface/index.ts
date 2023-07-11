type IAuthRequest = {
  username: string;
  password: string;
};

type IAuthResponse = {
  refresh: string;
  access: string;
};

type IResponseRefreshToken = {
  access: string;
};

type IUserTokenAuth = {
  user: {
    refresh: string;
    access: string;
  };
};

type IHeaderConfig = {
  Authorization: string;
  Accept: string;
  AccessControlAllowOrigin: string;
  AccessControlAllowMethods: string;
  AccessControlAllowHeaders: string;
};

export {
  IAuthRequest,
  IAuthResponse,
  IUserTokenAuth,
  IResponseRefreshToken,
  IHeaderConfig
};
