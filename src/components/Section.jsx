import { useState } from 'react';

function Section({ name, data, properties, onChange, onAdd, onDelete }) {

    const [editModes, setEditModes] = useState([]);
    
    const handleInputChange = (property, event,index) => {
        const newValue = event.target.value;
        onChange(property, newValue, index);
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
        <div className='border-2 flex-col my-2 p-2'>
            <h2>{name}</h2>
            {data.map((item, index) => (
                <div key={index}>
                    {editModes[index] ? (
                        <>
                            {properties.map((property) => (
                                <input
                                    key={property}
                                    placeholder={property}
                                    value={item[property]}
                                    onChange={(event) => handleInputChange(property, event, index)}
                                />
                            ))}
                            <button className='bg-slate-600' onClick={() => toggleEditMode(index)}>Save</button>
                            <button className='bg-slate-600' onClick={() => onDelete(index)}>Delete</button>
                        </>
                    ) : (
                        <>
                            <div className='flex'>
                            {properties.map((property) => (
                                <div key={property} className='mx-1'>
                                    {property}: {item[property]}
                                </div>
                            ))}
                            </div>
                            <button onClick={() => toggleEditMode(index)}>Edit</button>
                        </>
                    )}
                    
                </div>
            ))}
            <button className='bg-slate-600' onClick={addSectionItem}>Add {name}</button>
        </div>
    );
}

export default Section;