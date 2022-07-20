const axios = require('axios');

class TFA {
    constructor(access_token) {
        this.access_token = access_token;
    }

    authUser(user_id) {
        return axios.get(`https://tele-fa-api.herokuapp.com/api/access/${this.access_token}/${user_id}`)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }
}

module.exports = TFA;