const tfa = require('tfa-node-sdk');

const auth = new tfa('ZmErsKQcfaODiKAZdopcwQEjW');

const result = auth.authUser('PemBvQIQBjSxKQrChoFRDzCoh');

result.then((result) => {
    const resultObject = result.response.data;
    const statCode = result.response.status;

    if (statCode === 200) {
        console.log('Authenticated.');
        const user = resultObject.user;
    } else {
        console.log(resultObject.message);
    }
});