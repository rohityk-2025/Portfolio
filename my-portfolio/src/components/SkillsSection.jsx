import "./SkillsSection.css";

function SkillsSection() {
  return (
    <section className="skills-section">
      {/* Header */}
      <div className="skills-header">
        <span>SKILLS</span>
        <div className="skills-line"></div>
      </div>

      {/* Skills Rows */}
      <div className="skills-rows">
        <div className="skills-row ">
          <span>#Frontend</span>
          <span>#React</span>
          <span>#JavaScript</span>
          <i>✦</i>
        </div>

        <div className="skills-row">
          <span>#NodeJS</span>
          <span>#Express</span>
          <span>#Java</span>
          <i>✦ ✦</i>
        </div>

        <div className="skills-row">
          <span>#SpringBoot</span>
          <span>#DotNet</span>
          <span>#CSharp</span>
          <i>✦ ✦ ✦</i>
        </div>

        <div className="skills-row">
          <span>#MySQL</span>
          <span>#Database</span>
          <span>#C++</span>
          <i>✦ ✦ ✦ ✦</i>
        </div>

        <div className="skills-row">
          {/* <span>#Leadership</span> */}
          <span>#Communication</span>
          <i>✦ ✦ ✦ ✦ ✦</i>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
