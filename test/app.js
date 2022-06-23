const tfa = require('tfa-node-sdk');

const auth = new tfa('ZmErsKQcfaODiKAZdopcwQEjW');

const result = auth.authUser('PemBvQIQBjSxKQrChoFRDzCoh');

result.then((result) => {
    const statCode = result.error;

    if (statCode === 800) {
        console.log('Authenticated.');
    } else if (statCode === 820) {
        console.log('User token is wrong.');
    } else if (statCode === 290) {
        console.log('Admin token is wrong.');
    }
});