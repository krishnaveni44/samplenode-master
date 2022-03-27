import React from "react";
import { SignupForm } from "./SignupForm";

export function Msg({ name }) {
  return (
    <div className="come">
      <h1>Welcome, {name} 🥗🎄</h1>
      <SignupForm />
    </div>
  );
}
