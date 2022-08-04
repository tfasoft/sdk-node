const tfa = require('tfa-node-sdk');

const auth = new tfa('itEvNsiSpmQFNDiOQtKHCVtDc');

const result = auth.authUser('uAMGSFEFDQUevEHWulAMHIBtz');

result.then((result) => {
    const data = result.data;
    const statCode = result.status;

    if (statCode === 200) {
        const user = data.user;
        console.log(user);
    } else {
        console.log(data.message);
    }
});