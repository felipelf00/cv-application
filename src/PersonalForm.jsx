import "./form.css";

export default function PersonalForm({ onInputChange }) {
  return (
    <>
      <label htmlFor="full-name">Full name</label>
      <input
        type="text"
        id="full-name"
        onChange={(e) => onInputChange("personal", "fullName", e.target.value)}
      />
      <label htmlFor="full-name">Email</label>
      <input
        type="email"
        id="email"
        onChange={(e) => onInputChange("personal", "email", e.target.value)}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        onChange={(e) => onInputChange("personal", "phone", e.target.value)}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        onChange={(e) => onInputChange("personal", "location", e.target.value)}
      />
    </>
  );
}
