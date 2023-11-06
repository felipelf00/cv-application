import "./Resume.css";

export default function Resume({
  personalInfo,
  educationInfo,
  professionalInfo,
}) {
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
      <hr />
      <section>
        <h4>Education</h4>
        {educationInfo.map((item) => (
          <div key={item.id} className="education">
            <p>
              <span className="left">
                <b>{item.school} -</b> {item.degree}{" "}
              </span>
              <span className="right">
                <b>Start: </b>
                {item.start} <b>End: </b>
                {item.end}
              </span>
            </p>
          </div>
        ))}
      </section>
      <hr />
      <section>
        <h4>Professional experience</h4>
        {professionalInfo.map((item) => (
          <div key={item.id} className="professional">
            <p>
              <span className="left">
                <b>{item.company} - </b> {item.position}{" "}
              </span>
              <span className="right">
                <b>Start: </b>
                {item.start} <b>End: </b>
                {item.end}
              </span>
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
