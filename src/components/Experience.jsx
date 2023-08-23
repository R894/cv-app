import { useState } from 'react';

function Experience({experience, onChange, onAdd, onDelete}){

    const handleInputChange = (index, property, event) => {
        const newValue = event.target.value;
        onChange(index, property, newValue);
    };

    const [editModes, setEditModes] = useState([]);

    const toggleEditMode = (index) => {
        const newEditModes = [...editModes];
        newEditModes[index] = !newEditModes[index];
        setEditModes(newEditModes);
    };

    const addExperience = () => {
        onAdd();
        setEditModes([...editModes, true]); 
    };

    return(
        <div className="experience">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
                <div key={index}>
                    {editModes[index] ? (
                        <>
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
                            
                            <button onClick={() => toggleEditMode(index)}>Save</button>
                        </>
                    ) : (
                        <>
                            <p>{exp.position}</p>
                            <button onClick={() => toggleEditMode(index)}>Edit</button>
                        </>
                    )}

                        
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
            <button onClick={addExperience}>Add Work Experience</button>
        </div>
    );
}
export default Experience;