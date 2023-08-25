import { useState } from 'react';

function Section({ name, data, properties, onChange, onAdd, onDelete }) {

    const [editModes, setEditModes] = useState([]);
    
    const handleInputChange = (property, event) => {
        const newValue = event.target.value;
        onChange(property, newValue);
    };

    const toggleEditMode = (index) => {
        const newEditModes = [...editModes];
        newEditModes[index] = !newEditModes[index];
        setEditModes(newEditModes);
    };

    const addSectionItem = () => {
        onAdd();
        setEditModes([...editModes, true]); 
    };

    return (
        <div className={name}>
            <h2>{name}</h2>
            {data.map((item, index) => (
                <div key={index}>
                    {editModes[index] ? (
                        <>
                            {properties.map((property) => (
                                <input
                                    key ={property}
                                    placeholder={property}
                                    value={item[property]}
                                    onChange={(event) => handleInputChange(property, event)}
                                />
                            ))}
                            <button onClick={() => toggleEditMode(index)}>Save</button>
                            
                        </>
                    ) : (
                        <>
                            {properties.map((property) => (
                                <p key={property}>
                                    {property}:{item[property]}
                                </p>
                            ))}
                            <button onClick={() => toggleEditMode(index)}>Edit</button>
                        </>
                    )}
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
            <button onClick={addSectionItem}>Add {name}</button>
        </div>
    );
}

export default Section;