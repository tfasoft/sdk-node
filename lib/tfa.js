const axios = require('axios');

class TFA {
    constructor(access_token) {
        this.access_token = access_token;
    }

    authUser(user_id) {
        const data = {
            url: 'https://tele-fa-api.herokuapp.com/api/access',
            aid: this.access_token,
            uid: user_id,
        }

        axios.get(`${data.url}/${data.aid}/${data.uid}`)
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error;
            });
    }
}

module.exports = TFA;