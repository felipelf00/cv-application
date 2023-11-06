import { useState } from "react";
import "./App.css";
import Resume from "./Resume";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import ProfessionalForm from "./ProfessionalForm";
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

  const [professionalInfo, setProfessionalInfo] = useState([
    {
      company: "",
      position: "",
      description: "",
      start: "",
      end: "",
      id: uuidv4(),
    },
  ]);

  const [isOpenPersonal, setIsOpenPersonal] = useState(true);
  const [isOpenEducation, setIsOpenEducation] = useState(false);
  const [isOpenProfessional, setIsOpenProfessional] = useState(false);

  const toggleCollapse = (section) => {
    switch (section) {
      case "personal":
        setIsOpenPersonal(!isOpenPersonal);
        break;
      case "education":
        setIsOpenEducation(!isOpenEducation);
        break;
      case "professional":
        setIsOpenProfessional(!isOpenProfessional);
        break;
    }
  };

  const addItem = (section) => {
    switch (section) {
      case "education":
        setEducationInfo((prevEducationInfo) => [
          ...prevEducationInfo,
          { school: "", degree: "", start: "", end: "", id: uuidv4() },
        ]);
        break;
      case "professional":
        setProfessionalInfo((prevProfessionalInfo) => [
          ...prevProfessionalInfo,
          {
            company: "",
            position: "",
            description: "",
            start: "",
            end: "",
            id: uuidv4(),
          },
        ]);
    }
  };

  const removeItem = (section, id) => {
    switch (section) {
      case "education":
        setEducationInfo((prevEducationInfo) =>
          prevEducationInfo.filter((item) => item.id !== id)
        );
        break;
      case "professional":
        setProfessionalInfo((prevProfessionalInfo) =>
          prevProfessionalInfo.filter((item) => item.id !== id)
        );
        break;
    }
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
      case "professional":
        setProfessionalInfo((prevProfessionalInfo) =>
          prevProfessionalInfo.map((item) =>
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
          <div className="personal-info form-card">
            <div className="top-row">
              <div className="item-wrapper">
                <h3>Personal information</h3>
                <button
                  className="expander"
                  onClick={() => toggleCollapse("personal")}
                >
                  {isOpenPersonal ? "-" : "+"}
                </button>
              </div>
            </div>
            {isOpenPersonal && (
              <PersonalForm onInputChange={handleInputChange} />
            )}
          </div>
          <div className="education-info form-card">
            <div className="item-wrapper">
              <h3>Educational</h3>
              <button
                className="expander"
                onClick={() => toggleCollapse("education")}
              >
                {isOpenEducation ? "-" : "+"}
              </button>
            </div>
            {isOpenEducation &&
              educationInfo.map((item) => (
                <EducationForm
                  key={item.id}
                  onInputChange={handleInputChange}
                  educationItem={item}
                  removeItem={removeItem}
                  index={educationInfo.indexOf(item)}
                />
              ))}
            {isOpenEducation && (
              <button onClick={() => addItem("education")}>Add another</button>
            )}
          </div>
          <div className="professional-info form-card">
            <div className="item-wrapper">
              <h3>Professional</h3>
              <button
                className="expander"
                onClick={() => toggleCollapse("professional")}
              >
                {isOpenProfessional ? "-" : "+"}
              </button>
            </div>
            {isOpenProfessional &&
              professionalInfo.map((item) => (
                <ProfessionalForm
                  key={item.id}
                  onInputChange={handleInputChange}
                  professionalItem={item}
                  removeItem={removeItem}
                  index={professionalInfo.indexOf(item)}
                />
              ))}
            {isOpenProfessional && (
              <button onClick={() => addItem("professional")}>
                Add another
              </button>
            )}
          </div>
        </section>
        <section className="output">
          <Resume
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            professionalInfo={professionalInfo}
          />
        </section>
      </main>
    </>
  );
}

export default App;
