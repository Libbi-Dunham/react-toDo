import React from 'react';

export default function AuthForm({ email, setEmail, password, error, setPassword, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{error}</h3>
      <div className="form-control">
        <label>Email: </label>
        <input
          className="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Password: </label>
        <input
          className="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input className="submit" type="submit" />
    </form>
  );
}
