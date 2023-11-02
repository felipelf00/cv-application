import "./Resume.css";

export default function Resume({ personalInfo, educationInfo }) {
  return (
    <div className="resume">
      <header>
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
      </header>
      <br />
      <section>
        <h4>Education</h4>
        {educationInfo.map((item) => (
          <div key={item.id} className="education">
            <p>
              <b>{item.school} -</b> {item.degree} <b>Start:</b>
              {item.start} <b>End:</b>
              {item.end}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
