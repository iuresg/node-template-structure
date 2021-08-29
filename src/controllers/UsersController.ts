import { User } from "@models/User";

export class UsersController {
  teste(): User {
    const user = new User();
    return user;
  }
}
