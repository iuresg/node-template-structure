import { User } from "@models/User";

test("it should be ok", () => {
  const user = new User();
  user.name = "Iure";
  expect(user.name).toEqual("Iure");
});
