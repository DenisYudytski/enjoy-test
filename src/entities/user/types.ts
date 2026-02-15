interface IBaseUser {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

interface IAdminUser extends IBaseUser {
  isAdmin: true;
  email: string;
  password: string;
}

interface IRegularUser extends IBaseUser {
  isAdmin: false;
}

export type IUser = IAdminUser | IRegularUser;

export interface ISaveUserVariables {
  name: string;
  avatar: string;
}

export interface ISaveUserContext {
  previousUsers?: IUser[];
}
