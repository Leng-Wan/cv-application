import './styles/App.css'
import {useState} from 'react'

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
      {isEditingGeneral ? 
      <section className="General-Info editMode">
        <h2>Personal Details</h2>
        <input type="text" placeholder="John" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <input type="text" placeholder="09******" value={tel} onChange={(e)=>setTel(e.target.value)}/>
        <input type="email" placeholder="example@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <div className="action-buttons">
          <button className="save-button" onClick={() => setIsEditingGeneral(false)}>Save</button>
          <button className="cancel-button" onClick={() => setIsEditingGeneral(false)}>Cancel</button>
        </div>   
      </section>:
       <section className="General-Info displayMode">
        <h2>Personal Details</h2>
        <div className="Info-Container">
           <div className="Label-Name">
              <p>Name&#9;:</p>
              <p>Tel&#9;:</p>
              <p>Email&#9;:</p>
          </div>
          <div className="Info-Details">
            <p>{userName}</p>
            <p>{tel}</p>
            <p>{email}</p>
          </div>
        </div>
        <button className="edit-button" onClick={() => setIsEditingGeneral(true)}>Edit</button>
      </section> 
      }

      {isEditingEducation ?
        <section className="Education editMode">
          <h2>Education Background</h2>
          <input type="text" placeholder="School Name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
          <input type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)}/>
          <input type="text" placeholder="Years Attended" value={yearsAttended} onChange={(e)=>setYearsAttended(e.target.value)}/>
          <div className="action-buttons">
            <button className="save-button" onClick={() => setIsEditingEducation(false)}>Save</button>
            <button className="cancel-button" onClick={() => setIsEditingEducation(false)}>Cancel</button>
          </div> 
        </section>:
        <section className="Education displayMode">
          <h2>Education Background</h2>
          <div className="Info-Container">
            <div className="Label-Name">
              <p>University:</p>
              <p>Degree:</p>
              <p>Years Attended:</p>
            </div>
            <div className="Info-Details">
              <p>{schoolName}</p>
              <p>{degree}</p>
              <p>{yearsAttended}</p>
            </div>    
          </div>   
          <button className="edit-button" onClick={() => setIsEditingEducation(true)}>Edit</button>
        </section>
      }

      {isEditingExperience ?
        <section className="Experience editMode">
          <h2>Practical Experience</h2>
          <input type="text" placeholder="Position" value={position} onChange={(e)=>setPosition(e.target.value)}/>
          <input type="text" placeholder="Responsibilities" value={responsibilities} onChange={(e)=>setResponsibilities(e.target.value)}/>
          <input type="text" placeholder="Years Worked" value={yearsWorked} onChange={(e)=> setYearsWorked(e.target.value)}/>
          <div className="action-buttons">
            <button className="save-button" onClick={()=> setIsEditingExperience(false)}>Save</button>
            <button className="cancel-button" onClick={() => setIsEditingExperience(false)}>Cancel</button>
          </div>    
      </section>:
      <section className="Experience displayMode">
        <h2>Practical Experience</h2>
        <div className="Info-Container">
          <div className="Label-Name">
            <p>Position:</p>
            <p>Responsibilities:</p>
            <p>Years Worked:</p>
          </div>
          <div className="Info-Details">
            <p>{position}</p>
            <p>{responsibilities}</p>
            <p>{yearsWorked}</p>
          </div>
        </div>
        <button className="edit-button" onClick={()=> setIsEditingExperience(true)}>Edit</button>
      </section>
      }      
    </div>
  )
}

export default App