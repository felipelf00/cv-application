import { useState } from "react";
import "./App.css";
import Resume from "./Resume";
import PersonalForm from "./PersonalForm";
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

function EducationForm({ educationItem, onInputChange }) {
  return (
    <div className="education-form">
      <label htmlFor={`school-${educationItem.id}`}>Institution</label>
      <input
        type="text"
        id={`school-${educationItem.id}`}
        onChange={(e) =>
          onInputChange("education", "school", e.target.value, educationItem.id)
        }
      />

      <label htmlFor={`degree-${educationItem.id}`}>Degree</label>
      <input
        type="text"
        id={`degree-${educationItem.id}`}
        onChange={(e) =>
          onInputChange("education", "degree", e.target.value, educationItem.id)
        }
      />

      <label htmlFor={`start-${educationItem.id}`}>Start date</label>
      <input
        type="text"
        id={`start-${educationItem.id}`}
        onChange={(e) =>
          onInputChange("education", "start", e.target.value, educationItem.id)
        }
      />

      <label htmlFor={`end-${educationItem.id}`}>End date</label>
      <input
        type="text"
        id={`end-${educationItem.id}`}
        onChange={(e) =>
          onInputChange("education", "end", e.target.value, educationItem.id)
        }
      />
      <br />
    </div>
  );
}

export default App;
