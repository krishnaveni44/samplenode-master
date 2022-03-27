import React from "react";
import { Login } from "./Login";

export function Msg({ name }) {
  return (
    <div className="come">
      <h1>Welcome, {name} 🥗🎄</h1>
      <Login />
    </div>
  );
}
