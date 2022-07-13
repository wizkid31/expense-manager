import axios from "axios";
const baseUrl = "https://expense-manager-backend-api.herokuapp.com/auth/";

class userAuthService {
  login = async (data) => {
    const { username, password } = data;
    let res = await axios({
      method: "post",
      url: baseUrl + "login/",
      headers: {
        "content-type": "application/json",
      },
      data: {
        username,
        password,
      },
    });
    return res.data;
  };
  register = async (data) => {
    const { first_name, email, username, password } = data;
    let res = await axios({
      method: "post",
      url: baseUrl + "register/",
      headers: {
        "content-type": "application/json",
      },
      data: {
        first_name,
        email,
        username,
        password,
      },
    });
    return res.data;
  };

  profile = async (token) => {
    let { data } = await axios({
      method: "get",
      url: baseUrl + "profile/",
      headers: {
        Authorization: "Token " + token,
        "Content-type": "application/json;",
      },
    });
    return data;
  };
}

export default new userAuthService();
