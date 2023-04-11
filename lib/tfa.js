import API from "./api/index.js";

class TFA {
  constructor(access_token) {
    this.access_token = access_token;
  }

  async authUser(user_token) {
    const data = {
      access_token: this.access_token,
      user_token: user_token,
    };

    try {
      const response = await API.post("access", data);

      return {
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      return {
        status: error.response.status,
        data: error.response.data,
      };
    }
  }
}

export default TFA;
