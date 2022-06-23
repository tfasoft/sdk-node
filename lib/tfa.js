class TFA {
    constructor(access_token) {
        this.access_token = access_token;
    }

    authUser(user_id) {
        console.log(`Access Token is ${this.access_token} and user ID is ${user_id}`);
    }
}

module.exports = TFA;