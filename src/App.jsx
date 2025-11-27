import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <section className="General-Info displayMode">
        <h2>Personal Details</h2>
        <div className="Info-Container">
           <div className="Label-Name">
              <p>Name&#9;:</p>
              <p>Tel&#9;:</p>
              <p>Email&#9;:</p>
          </div>
          <div className="Info-Details">
            <p>John Smith</p>
            <p>09250788447</p>
            <p>johnsmith@gmail.com</p>
          </div>
        </div>
        <button className="edit-button">Edit</button>
      </section>
      <section className="General-Info editMode">
        <h2>Personal Details</h2>
        <input type="text" placeholder="John" defaultValue="John"/>
        <input type="text" placeholder="09******" defaultValue="09250788447"/>
        <input type="email" placeholder="example@gmail.com" defaultValue="johnsmith@gmail.com"></input>
        <div className="action-buttons">
          <button className="save-button">Save</button>
          <button className="cancel-button">Cancel</button>
        </div>   
      </section>

      <section className="Education displayMode">
        <h2>Education Background</h2>
        <div className="Info-Container">
          <div className="Label-Name">
            <p>University:</p>
            <p>Degree:</p>
            <p>Years Attended:</p>
          </div>
          <div className="Info-Details">
            <p>ABC University</p>
            <p>Bachelor of Science in Computer Science</p>
            <p>2015 - 2019</p>
          </div>    
        </div>   
        <button className="edit-button">Edit</button>
      </section>
      <section className="Education editMode">
        <h2>Education Background</h2>
        <input type="text" placeholder="School Name" defaultValue="ABC University"/>
        <input type="text" placeholder="Degree" defaultValue="Bachelor of Science in Computer Science"/>
        <input type="text" placeholder="Years Attended" defaultValue="2015 - 2019"/>
        <div className="action-buttons">
          <button className="save-button">Save</button>
          <button className="cancel-button">Cancel</button>
        </div> 
      </section>
      
      <section className="Experience displayMode">
        <h2>Practical Experience</h2>
        <div className="Info-Container">
          <div className="Label-Name">
            <p>Position:</p>
            <p>Responsibilities:</p>
            <p>Years Worked:</p>
          </div>
          <div className="Info-Details">
            <p>Software Engineer at XYZ Corp</p>
            <p>Developed web applications using React and Node.js</p>
            <p>2019 - Present</p>
          </div>
        </div>
        <button className="edit-button">Edit</button>
      </section>

      <section className="Experience editMode">
        <h2>Practical Experience</h2>
        <input type="text" placeholder="Position" defaultValue="Software Engineer at XYZ Corp"/>
        <input type="text" placeholder="Responsibilities" defaultValue="Developed web applications using React and Node.js"/>
        <input type="text" placeholder="Years Worked" defaultValue="2019 - Present"/>
        <div className="action-buttons">
          <button className="save-button">Save</button>
          <button className="cancel-button">Cancel</button>
        </div> 
        
      </section>
    </div>
  )
}

export default App