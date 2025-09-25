import React, { useState } from "react";

function LoginModal({ open, onClose, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    const fakeToken = btoa(`${email}:${Date.now()}`);
    localStorage.setItem("auth_token", fakeToken);
    localStorage.setItem("auth_email", email);
    onSuccess({ email });
    onClose();
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Login</h3>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="login-btn" style={{ width: "100%" }}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;