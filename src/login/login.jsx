import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

export function Login() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="login-box">
        <h1>Login or Sign Up</h1>
        <form method="get" action="garden.html">
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input className="form-control" type="text" placeholder="your@email.com" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input className="form-control" type="password" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <button type="submit" className="btn btn-secondary">Create</button>
        </form>
      </div>
    </main>
  );
}