import { useState } from "react";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleInputChange = (name, value) => {
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  return (
    <>
      <header>
        <h2>CV builder</h2>
      </header>
      <main>
        <section className="input">
          <div className="personal-info">
            <PersonalForm onInputChange={handleInputChange} />
          </div>
        </section>
        <section className="output">
          <Resume personalInfo={personalInfo} />
        </section>
      </main>
    </>
  );
}

function PersonalForm({ onInputChange }) {
  return (
    <>
      <label htmlFor="full-name">Full name</label>
      <input
        type="text"
        id="full-name"
        onChange={(e) => onInputChange("fullName", e.target.value)}
      ></input>
      <label htmlFor="full-name">Email</label>
      <input
        type="email"
        id="email"
        onChange={(e) => onInputChange("email", e.target.value)}
      ></input>
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        onChange={(e) => onInputChange("phone", e.target.value)}
      ></input>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        onChange={(e) => onInputChange("location", e.target.value)}
      ></input>
    </>
  );
}

function Resume({ personalInfo }) {
  return (
    <div className="resume">
      <h3>{personalInfo.fullName}</h3>
      <div className="personal-info-row">
        <span className="email">
          <span className="material-symbols-outlined">mail</span>
          {personalInfo.email}
        </span>
        <span className="phone">
          <span className="material-symbols-outlined">call</span>
          {personalInfo.phone}
        </span>
        <span className="location">
          <span className="material-symbols-outlined">location_on</span>
          {personalInfo.location}
        </span>
      </div>
    </div>
  );
}

export default App;
