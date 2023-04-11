import tfa from "tfa-node-sdk";

const auth = new tfa("rglscfrrdqdjvalsyvwzelrab");

const result = auth.authUser("csxieuilrszyhzudxdjqhhhyl");

result.then((result) => {
  if (result.status === 200) {
    console.log({ user: result.data });
  } else {
    console.log({ message: result.data.message });
  }
});
