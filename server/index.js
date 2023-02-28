const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "0467cb458f82f446948827ed2df112cf97b11db2479273b9afc251ceb71599fd9ba49aa0b1f7ac5d8752f7d5caf2b3f981d89b8933848aa6715d4f582501613181": 100,
  "04d2b566a2265d07448c38b2ce68deb69dcb2fd31edf0827f33a0eb46d200c3493c08cbcd5a6ed04d73fccce431abb873b6655892a0fa41a95e739242fd33a86ab": 50,
  "0472e5c1ec8bdb847274fa8e874a644f5629ae0db2ffaf28f57cff33dd5d9c4e9eafe9bd9c30c1b3f1bacae5d659204189678acbc7e3f7be2c2816c55ffbf96e0c": 75,
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
