function Experience({experience, onChange, onAdd, onDelete}){

    const handleInputChange = (index, property, event) => {
        const newValue = event.target.value;
        onChange(index, property, newValue);
    };

    return(
        <div className="experience">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
                <div key={index}>
                    <input placeholder='Position' 
                        value={exp.position} 
                        onChange={(event) => handleInputChange(index, 'position', event)}/>

                    <input placeholder='Company' 
                        value={exp.company} 
                        onChange={(event) => handleInputChange(index, 'company', event)}/>
                        
                    <input placeholder='Start Date' 
                        value={exp.startDate}
                        onChange={(event) => handleInputChange(index, 'startDate', event)}/>
                        
                    <input placeholder='End Date' 
                        value={exp.endDate} 
                        onChange={(event) => handleInputChange(index, 'endDate', event)}/>

                    <input placeholder='Description' 
                        value={exp.description} 
                        onChange={(event) => handleInputChange(index, 'description', event)}/>
                        
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
            <button onClick={onAdd}>Add Work Experience</button>
        </div>
    );
}
export default Experience;