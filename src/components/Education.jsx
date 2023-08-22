function Education({ education, onChange, onAdd, onDelete }) {
    
    const handleInputChange = (index, property, event) => {
        const newValue = event.target.value;
        onChange(index, property, newValue);
    };

    return (
        <div className='education'>
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index}>
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
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
            <button onClick={onAdd}>Add Education</button>
        </div>
    );
}

export default Education;