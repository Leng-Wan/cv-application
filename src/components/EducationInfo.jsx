function EducationInfo({schoolName, setSchoolName, degree, setDegree, yearsAttended, setYearsAttended, isEditingEducation, setIsEditingEducation})
{
    return (
        <div>
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
        </div>
        )
} 
export default EducationInfo;