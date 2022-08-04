import axios from 'axios';

class TFA {
    access_token: string;
    baseUrl: string;

    constructor(access_token) {
        this.access_token = access_token;
        this.baseUrl = "https://tele-fa-api.herokuapp.com";
    }

    authUser(user_token: string) {
        const data = {
            "access_token": this.access_token,
            "user_token": user_token,
        }

        return axios.post(`${this.baseUrl}/api/auth/access`, data)
            .then((response) => {
                const data = {
                    status: response.status,
                    data: response.data,
                }

                return data;
            })
            .catch((error) => {
                const data = {
                    status: error.response.status,
                    data: error.response.data,
                }

                return data;
            });
    }
}

export default TFA;