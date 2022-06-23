const axios = require('axios');

class TFA {
    constructor(access_token) {
        this.access_token = access_token;
    }

    authUser(user_id) {
        const result = axios.get(`https://tele-fa-api.herokuapp.com/api/access/${this.access_token}/${user_id}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            })
            .then(() => {});

        return result;
    }
}

module.exports = TFA;