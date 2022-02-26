

export interface IUser {
  id?: string;
  login?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  activated?: boolean;
  langKey?: string;
  activationKey?: string;
  resetDate?: Date;
  resetKey?: string;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
  authorities?: string[];
  phoneNumber?: string;
}

export class User implements IUser {
  constructor(public id?: string,
              public login?: string,
              public password?: string,
              public firstName?: string,
              public lastName?: string,
              public  email?: string,
              public activated?: boolean,
              public langKey?: string,
              public activationKey?: string,
              public resetDate?: Date,
              public  resetKey?: string,
              public createdBy?: string,
              public createdDate?: Date,
              public lastModifiedBy?: string,
              public lastModifiedDate?: Date,
              public authorities?: string[],
              public phoneNumber?: string,
            
  ) {
/*     this.id = id ? id : null;
    this.firstName = firstName ? firstName : null;
    this.lastName = lastName ? lastName : null;
    this.login = login ? login : null;
    this.email = email ? email : null;
    this.password = password ? password : null; */

  }
}
