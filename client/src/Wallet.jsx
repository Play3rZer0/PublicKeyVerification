import server from "./server";

import * as secp from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";

function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  privateKey,
  setPrivateKey,
}) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    const address = toHex(secp.getPublicKey(privateKey));
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Private Key/Public Key Verification</h1>

      <label>
        {/* Wallet Address */}
        Private Key:
        <input
          placeholder="Type in a private key"
          value={privateKey}
          onChange={onChange}
        ></input>
      </label>

      <label>
        <div className="address">Public Key: {address} ... </div>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
