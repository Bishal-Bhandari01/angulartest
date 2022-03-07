export class UserResponseModel{
  id: string | undefined;
  name: string | undefined;
  password: string | undefined;
  email: string | undefined;
  dob: string | undefined;
  mobileNumber: string | undefined;
  contacts: Array<Contacts> = [];
}

export class Contacts{
  mobileNumber: string | undefined;
  email: string | undefined;
}
