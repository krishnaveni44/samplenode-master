import React from "react";
import { SignupFormnew } from "./SignupFormnew";

export function Msg({ name }) {
  return (
    <div className="come">
      <h1>Welcome, {name} 🥗🎄</h1>
      <SignupFormnew />
    </div>
  );
}
