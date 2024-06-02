import { IUser } from "../../../models/IUser";
import { api } from "../";

export const addUser = async ({ email, name, password, lastname }: IUser) => {
  try {
    const response = await api.post("/users", {
      name,
      lastname,
      password,
      email,
      sex: "M",
    });
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};
