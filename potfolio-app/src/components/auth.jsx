import "../styles/App.css";
import { useState } from "react";

export default function AccessControl({ setToken }) {
  const [passkey, setPasskey] = useState('');
  function HandleSubmit(e) {
    e.preventDefault();
    if (passkey) {
      // post data and save key
      setToken("12345");
    }
    setPasskey('')
  }
  return (
    <form className="auth-cont" onSubmit={HandleSubmit}>
      <div className="display-auth">
        <label>
          <p className="i-message">Secret PassKey</p>
          <input
            className="pass-key"
            type="password"
            placeholder="*************"
            onChange={(event) => setPasskey(event.target.value)}
          />
        </label>
        <button className="btn-pass" type="submit">
          submit passkey
        </button>
      </div>
    </form>
  );
}
