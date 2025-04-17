import axios from "axios";

const AuthServices = {};

AuthServices.login = async (email, password) => {
  let res = await axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`)
    .then((res) => res)
    .catch((err) => err);

  return res;
};

export default AuthServices;