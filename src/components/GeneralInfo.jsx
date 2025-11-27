function GeneralInfo({userName, setUserName, tel, setTel, email, setEmail, isEditingGeneral, setIsEditingGeneral})
{
    return (
        <div>
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
        </div>
    )
}
export default GeneralInfo;