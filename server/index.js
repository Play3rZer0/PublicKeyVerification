const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

//add the public key of 3 (or more) accounts here
const balances = {
  "0418b02d87e0efe1d845fe3a59245576726e5295cd6e2ab07288b85144788ab5eb7b9a5dfbc5f19238e6886b01c7c74384a9501ca1baa715c9ee4734e0a3b7d471": 100,
  "044ebc761bb4a27f82b7cdb8a06e68af9b87dc5c6deffffce7c3eba9090cb2aca18c2868fb5b9ab2ec53576872eb3ec0a45dd34e783d2c9d261449c20474d275a9": 50,
  "0404be71dec3acf131db6560a11cdff220df4164cd0fc52ce61d2574ac50da54a5a3e52f21f91f292fcbd141a3c3a3d571279a6a5b3ab3f0e3df9315dc5f71099d": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
