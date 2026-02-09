import "./SkillStrip.css";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiDotnet,
  SiMysql,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";

function SkillStrip() {
  return (
    <section className="skill-strip-section">
      <div className="skill-strip-track">
        {/* Strip 1 */}
        <div className="skill-strip">
          <span>
            <FaReact />
          </span>

          <span>
            <FaNodeJs />
          </span>
          <i>✧</i>

          <span>
            <FaJava />
          </span>

          <span>
            <SiSpringboot />
          </span>

          <span>
            <SiExpress />
          </span>
          <span>
            <SiDotnet />
          </span>

          <span>
            <SiMysql />
          </span>

          <span>
            <FaDatabase />
          </span>

          <span>
            <SiCplusplus />
          </span>
          <span>
            <FaGithub />
          </span>

          <span>
            <FaLinkedin />
          </span>
        </div>

        {/* Strip 2 (Duplicate) */}
        <div className="skill-strip">
          <span>
            <FaReact />
          </span>

          <span>
            <FaNodeJs />
          </span>

          <span>
            <FaJava />
          </span>

          <span>
            <SiSpringboot />
          </span>

          <span>
            <SiExpress />
          </span>

          <span>
            <SiDotnet />
          </span>

          <span>
            <SiMysql />
          </span>

          <span>
            <FaDatabase />
          </span>
          <span>
            <SiCplusplus />
          </span>

          <span>
            <FaGithub />
          </span>

          <span>
            <FaLinkedin />
          </span>
        </div>
      </div>
    </section>
  );
}

export default SkillStrip;
