import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Work from './components/Work/Work';

import styles from './App.module.scss';

const workList = [
  {
    workName: "ASAPP",
    workStartDate: "11/2019",
    workEndDate: "Current Job",
    workRole: "frontend developer",
    workDescription: "Reworking the back office to bring new and better experiencies for administrators using the system.",
  },
  {
    workName: "Mercado Libre",
    workStartDate: "11/2017",
    workEndDate: "11/2019",
    workRole: "fullstack developer",
    workDescription: "In charge of making great websites with scalable architectures, to handle huge amount of users.",
  },
  {
    workName: "Wikigrado (freelance)",
    workStartDate: "01/2018",
    workEndDate: "08/2019",
    workRole: "fullstack developer",
    workDescription: "In charge of building an app to let students decide what they can study based on a huge list of careers with videos explained by professionals.",
  },
  {
    workName: "Truelogic",
    workStartDate: "06/2016",
    workEndDate: "11/2017",
    workRole: "developer",
    workDescription: "I`m in charge of developing big web applications with angularJS and angular-material, creating reusable components and efficient code for a client that works with IoT. Also i`m involved in decision taking for new features implementations.",
  },
  {
    workName: "Wunderman",
    workStartDate: "07/2014",
    workEndDate: "06/2016",
    workRole: "developer",
    workDescription: "Worked for Ford and Lincoln US account. Worked in an innovation team to explore latest technologies and get new clients with awesome prototypes. Ford social network creation with adobe AEM (java, jcr, sightly). Mini projects for Ford and Lincoln sites which involved great UX and required the creation of reusable widgets. Work with vendors for external integrations.",
  },
  {
    workName: "Lenovo",
    workStartDate: "02/2014",
    workEndDate: "07/2014",
    workRole: "Tech Lead",
    workDescription: "In charge of making great websites with scalable architectures, to handle huge amount of users.",
  },
  {
    workName: "Lenovo",
    workStartDate: "10/2012",
    workEndDate: "02/2014",
    workRole: "developer",
    workDescription: "In charge of making great websites with scalable architectures, to handle huge amount of users.",
  },
  {
    workName: "DigiKnow",
    workStartDate: "07/2012",
    workEndDate: "09/2012",
    workRole: "developer",
    workDescription: "sharepoint migration. mobile sites. front end technologies",
  },
]

const App = () => {
  return (
    <Router>
      <div className={styles.appWrapper}>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            Hi, my name is <br/><span>Sebastian Murawczik</span><br/> and i´m a <span>developer</span>.
          </h1>
        </div>
        {/* section separator */}
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Some of my skills are:</h2>
          <div className={styles.skillList}>
            <div className={styles.skill}>
              <div className={styles.skillName}>React</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>Angular</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>Javascript</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>HTML5</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>CSS3</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>Ionic</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>Algorithms</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>Database Creation</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>PHP</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>MySQL</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>NodeJS</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>Java</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillName}>Design :(</div>
              <div className={styles.skillPercBar}>
                <div className={styles.skillPerc} style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>
        {/* section separator */}
        <div className={styles.languages}>
          <h2 className={styles.languageTitle}>I also know multiple (yeah, right) languages:</h2>
          <div className={styles.languagesList}>
            <div className={styles.language}>
              <div className={styles.languageName}>English: </div>
              <div className={styles.languageLevel}>Advanced</div>
            </div>
            <div className={styles.language}>
              <div className={styles.languageName}>Spanish: </div>
              <div className={styles.languageLevel}>Native</div>
            </div>
            <div className={styles.language}>
              <div className={styles.languageName}>Japanese: </div>
              <div className={styles.languageLevel}>watch-anime-with-subs-lvl</div>
            </div>
          </div>
        </div>
        {/* section separator */}
        <div className={styles.studies}>
          <h2 className={styles.studiesTitle}>Studies:</h2>
          <div className={styles.studyList}>
            <div className={styles.study}>
              <div className={styles.studyName}><b>Tertiary school: </b>ORT </div>
              <div className={styles.studyLevel}>2 years done</div>
            </div>
            <div className={styles.study}>
              <div className={styles.studyName}><b>Highschool: </b>E.T Nº 6 Fernando Fader </div>
              <div className={styles.studyLevel}>finished</div>
            </div>
          </div>
          <small className={styles.studiesDisclaimer}><b>Disclaimer: </b>I have studied at a technical school, Which means i have a set of hard skills that i´ll never use and will probably forget in the next couple years</small>
        </div>
        {/* section separator */}
        <div className={styles.work}>
          <h2 className={styles.workTitle}>Work Experience:</h2>
          <div className={styles.workList}>
            {
              workList.map((work, index) => <Work {...work} key={index} />)
            }
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
