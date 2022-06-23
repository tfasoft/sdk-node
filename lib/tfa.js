const axios = require('axios');

class TFA {
    constructor(access_token) {
        this.access_token = access_token;
    }

    authUser(user_id) {
        const data = {
            aid: this.access_token,
            uid: user_id,
        }

        return data;
    }
}

module.exports = TFA;