# Telegram Factor Authentication - Node SDK

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
    const statCode = result.error;

    if (statCode === 800) {
        console.log('Authenticated.');
    } else if (statCode === 820) {
        console.log('User token is wrong.');
    } else if (statCode === 290) {
        console.log('Admin token is wrong.');
    }
});
```

This was just knowing status codes. If you don't know them now, check out our docs and read them, and know what are result of every status code.

Ok, 800 and 290 just return you an 2 lenght object. One is `error` and second is `message`. But 800 doesn't return you a `message`. You check the stat, if it was 800, second item is `user`. User item is the user data that **telegram uid** is stored there and you can use it.

## More about status codes

Here let's know about them in deep.

- ### 800

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

- ### 820

```json
{
    "error": 820,
    "message": "User authentication token is not valid"
}
```

- ### 290

```json
{
    "error": 290,
    "message": "Admin access token is not valid"
}
```