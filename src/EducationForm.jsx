import "./form.css";

export default function EducationForm({
  educationItem,
  onInputChange,
  removeItem,
  index,
}) {
  return (
    <div className="education-form">
      <div className="item-wrapper">
        <h4>Item #{index + 1}</h4>
        <button
          className="material-symbols-outlined"
          onClick={() => removeItem(educationItem.id)}
        >
          delete
        </button>
      </div>

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
