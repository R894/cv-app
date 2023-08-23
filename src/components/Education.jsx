import { useState } from 'react';

function Education({ education, onChange, onAdd, onDelete }) {

    const [editModes, setEditModes] = useState([]);
    
    const handleInputChange = (index, property, event) => {
        const newValue = event.target.value;
        onChange(index, property, newValue);
    };

    const toggleEditMode = (index) => {
        const newEditModes = [...editModes];
        newEditModes[index] = !newEditModes[index];
        setEditModes(newEditModes);
    };

    const addEducation = () => {
        onAdd();
        setEditModes([...editModes, true]); 
    };

    return (
        <div className='education'>
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index}>
                    {editModes[index] ? (
                        <>
                            <input
                            placeholder='Institution'
                            value={edu.institution}
                            onChange={(event) => handleInputChange(index, 'institution', event)}
                            />
                            <input
                                placeholder='Degree'
                                value={edu.degree}
                                onChange={(event) => handleInputChange(index, 'degree', event)}
                            />
                            <input
                                placeholder='Year'
                                value={edu.year}
                                onChange={(event) => handleInputChange(index, 'year', event)}
                            />
                            <button onClick={() => toggleEditMode(index)}>Save</button>
                            
                        </>
                    ) : (
                        <>
                            <p>Institution: {edu.institution}</p>
                            <button onClick={() => toggleEditMode(index)}>Edit</button>
                        </>
                    )}
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
            <button onClick={addEducation}>Add Education</button>
        </div>
    );
}

export default Education;