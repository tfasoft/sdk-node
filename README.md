# Telegram Factor Authentication - Node SDK

[Node SDK document is in docs.tfasoft.com](https://docs.amirhossein.info/sdks/nodejs)

If you are using **TFA** as your authentication service in your node applications, you can use our package.

## How to use the package

So, let's have a quick review of our steps.

- Installation
- Configuration
- Checking result

### Installation

The easiest step is installation. You can install it with `npm`. Just go ahead and enter the command below:

```shell
$ npm i tfa-node-sdk
```

Congratulations! First step is done!

### Configuration

After installation, go to your file and import the package:

```javascript
const tfa = require('tfa-node-sdk');
```

Second, you need to epecify the **accecc_token**. You can get it in your dashboard panel. So, call the class:

```javascript
const auth = new tfa('access_token');
```

Ok, now package know your access token. Now it's time to enter the **user_token**. User token is the code you get it from your form field or a post method. Importent is to get user token. So, we use `authUser` function to pass user token and get the result.

```javascript
const result = auth.authUser('user_token');
```

You are done it this step. Let's move forward and check status codes and check user result.

### Checking result

When you get the result, you have to use `then` and go for other stuff. Let's use `then` like this:

```javascript
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
```

This was just knowing status codes. If you don't know them now, check out our docs and read them, and know what are result of every status code.

Ok, 800 and 290 just return you an 2 lenght object. One is `error` and second is `message`. But 800 doesn't return you a `message`. You check the stat, if it was 800, second item is `user`. User item is the user data that **telegram uid** is stored there and you can use it.

## Returned Objects

Here let's know about them in deep.

- ### 200

```json
{
    "error": 800,
    "user": {
        "_id": "document id",
        "uid": "telegram user id",
        "token": "one time token. Every time become null",
        "createdAt": "when created",
        "updatedAt": "last update",
        "__v": 0
    }
}
```

- ### 401

One is access token is wrong.

```json
{
    "message": "User authentication token is not valid"
}
```

Another is when user token is wrong.

```json
{
    "message": "Admin access token is not valid"
}
```

## Development

If you want to develop the package, it is so simple. just follow steps below.

- Link package
- Test

> Before you start: **Remember the base or codes are stored in `lib/tfa.js`. You need to edit there.

### Link package

We asoume you are in `tfa-node-sdk` directory. Right. You can open a **tmux** or in another terminal to cd in `test` directory.

In `tfa-node-sdk` directory enter link command:

```shell
$ npm link
```

So, in other terminal, or other tmux part, link your development package to your `test` directory. If you are in the `test` directory ok, if not, just say `cd test` and enter the linking command:

```shell
$ npm link tfa-node-sdk
```

Linking step is done.

### Test

Your test app is linked. Change anything in package and test it in `test` directory.