import { useState } from "react";
import "./App.css";
import Resume from "./Resume";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      school: "",
      degree: "",
      start: "",
      end: "",
      id: uuidv4(),
    },
  ]);

  const addEducationItem = () => {
    setEducationInfo((prevEducationInfo) => [
      ...prevEducationInfo,
      { school: "", degree: "", start: "", end: "", id: uuidv4() },
    ]);
  };

  const removeEducationItem = (id) => {
    setEducationInfo((prevEducationInfo) =>
      prevEducationInfo.filter((item) => item.id !== id)
    );
  };

  const handleInputChange = (section, name, value, id) => {
    switch (section) {
      case "personal":
        setPersonalInfo({ ...personalInfo, [name]: value });
        break;
      case "education":
        setEducationInfo((prevEducationInfo) =>
          prevEducationInfo.map((item) =>
            item.id === id ? { ...item, [name]: value } : item
          )
        );
        break;
    }
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
          <div className="education-info">
            <h3>Educational</h3>
            {educationInfo.map((item) => (
              <EducationForm
                key={item.id}
                onInputChange={handleInputChange}
                educationItem={item}
                removeItem={removeEducationItem}
                index={educationInfo.indexOf(item)}
              />
            ))}
            <button onClick={addEducationItem}>Add another</button>
          </div>
        </section>
        <section className="output">
          <Resume personalInfo={personalInfo} educationInfo={educationInfo} />
        </section>
      </main>
    </>
  );
}

export default App;
