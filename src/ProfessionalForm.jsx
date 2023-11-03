import "./form.css";

export default function ProfessionalForm({
  professionalItem,
  onInputChange,
  removeItem,
  index,
}) {
  return (
    <div className="professional-form">
      <div className="item-wrapper">
        <h4>Item #{index + 1}</h4>
        <button
          className="material-symbols-outlined"
          onClick={() => removeItem("professional", professionalItem.id)}
        >
          delete
        </button>
      </div>

      <label htmlFor={`company-${professionalItem.id}`}>Company</label>
      <input
        type="text"
        id={`company-${professionalItem.id}`}
        onChange={(e) =>
          onInputChange(
            "professional",
            "company",
            e.target.value,
            professionalItem.id
          )
        }
      />

      <label htmlFor={`position-${professionalItem.id}`}>Position</label>
      <input
        type="text"
        id={`position-${professionalItem.id}`}
        onChange={(e) =>
          onInputChange(
            "professional",
            "position",
            e.target.value,
            professionalItem.id
          )
        }
      />

      <label htmlFor={`start-${professionalItem.id}`}>Start date</label>
      <input
        type="text"
        id={`start-${professionalItem.id}`}
        onChange={(e) =>
          onInputChange(
            "professional",
            "start",
            e.target.value,
            professionalItem.id
          )
        }
      />

      <label htmlFor={`end-${professionalItem.id}`}>End date</label>
      <input
        type="text"
        id={`end-${professionalItem.id}`}
        onChange={(e) =>
          onInputChange(
            "professional",
            "end",
            e.target.value,
            professionalItem.id
          )
        }
      />
      <label htmlFor={`description-${professionalItem.id}`}>Description</label>
      {/* <input
        type="text"
        id={`description-${professionalItem.id}`}
        onChange={(e) =>
          onInputChange(
            "professional",
            "description",
            e.target.value,
            professionalItem.id
          )
        }
      /> */}
      <textarea
        id={`description-${professionalItem.id}`}
        onChange={(e) =>
          onInputChange(
            "professional",
            "description",
            e.target.value,
            professionalItem.id
          )
        }
      />
      <br />
    </div>
  );
}
