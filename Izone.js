import React from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import ProfileCard from "./ProfileCard";

function Izone() {
  return (
    <div className="izone">
      <WelcomeMessage name="John Doe" />
      <ProfileCard
        name="John Doe"
        age={30}
        location="New York"
        bio="Software Engineer with a passion for coding."
      />
    </div>
  );
}

export default Izone;