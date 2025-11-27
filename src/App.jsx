import './styles/App.css'
import {useState} from 'react'
import GeneralInfo from './components/GeneralInfo.jsx'
import EducationInfo from './components/EducationInfo.jsx'
import ExperienceInfo from './components/ExperienceInfo.jsx'

function App() {
  // General Info State
  const [userName, setUserName] = useState('John');
  const [tel, setTel] = useState('09250788447');
  const [email, setEmail] = useState('johnsmith@gmail.com');
  const [isEditingGeneral, setIsEditingGeneral] = useState(false);  

  //Education State
  const [schoolName, setSchoolName] = useState('ABC University');
  const [degree, setDegree] = useState('Bachelor of Science in Computer Science');
  const [yearsAttended, setYearsAttended] = useState('2015 - 2019');
  const [isEditingEducation, setIsEditingEducation] = useState(false);

  //Experience State
  const [position, setPosition] = useState('Software Engineer at XYZ Corp');
  const [responsibilities, setResponsibilities] = useState('Developed web applications using React and Node.js');
  const [yearsWorked, setYearsWorked] = useState('2019 - Present');
  const [isEditingExperience, setIsEditingExperience] = useState(false);

  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo 
        userName={userName} 
        setUserName={setUserName} 
        tel={tel} 
        setTel={setTel} 
        email={email} 
        setEmail={setEmail} 
        isEditingGeneral={isEditingGeneral} 
        setIsEditingGeneral={setIsEditingGeneral}
      />
      <EducationInfo 
        schoolName={schoolName} 
        setSchoolName={setSchoolName} 
        degree={degree} 
        setDegree={setDegree} 
        yearsAttended={yearsAttended} 
        setYearsAttended={setYearsAttended} 
        isEditingEducation={isEditingEducation} 
        setIsEditingEducation={setIsEditingEducation}
      />
      <ExperienceInfo
        position={position} 
        setPosition={setPosition} 
        responsibilities={responsibilities} 
        setResponsibilities={setResponsibilities} 
        yearsWorked={yearsWorked} 
        setYearsWorked={setYearsWorked} 
        isEditingExperience={isEditingExperience} 
        setIsEditingExperience={setIsEditingExperience}
      />    
    </div>
  )
}

export default App