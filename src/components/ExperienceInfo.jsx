function ExperienceInfo({position, setPosition, responsibilities, setResponsibilities, yearsWorked, setYearsWorked, isEditingExperience, setIsEditingExperience})
{
    return (
        <div>
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

export default ExperienceInfo;