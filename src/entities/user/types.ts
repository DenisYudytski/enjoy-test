export interface IUser {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

export interface ISaveUserVariables {
  name: string;
  avatar: string;
}

export interface ISaveUserContext {
  previousUsers?: IUser[];
}
