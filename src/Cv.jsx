import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import Education from './Education';

function CVBuilder(){

    const [person, setPerson] = useState({
        name: '',
        email: '',
        phone: '',
        location: ''
    });

    const [education, setEducation] = useState([
        { institution: '', degree: '', year: '' },
    ]);

    const handleDetailsChange = (property, value) => {
        setPerson(prevPerson => ({
            ...prevPerson,
            [property]: value
        }));
    };

    const handleEducationChange = (index, property, newValue) => {
        const updatedEducation = [...education];
        updatedEducation[index] = { ...updatedEducation[index], [property]: newValue };
        setEducation(updatedEducation);
    };

    const handleAddEducation = () => {
        setEducation([...education, { institution: '', degree: '', year: '' }]);
    };

    const handleDeleteEducation = (index) => {
        const updatedEducation = [...education];
        updatedEducation.splice(index, 1);
        setEducation(updatedEducation);
    };

    return(
        <>
            <div className="editor">
                <PersonalDetails person={person} onChange={handleDetailsChange} />
                <Education
                    education={education}
                    onChange={handleEducationChange}
                    onAdd={handleAddEducation}
                    onDelete={handleDeleteEducation}
                />
            </div>
            
            <div className="resume-container">
                <div className="personal-info">
                    <h1 className="resume-name">{person.name}</h1>
                    <div className="details">
                        <div className="resume-mail">Mail: {person.email}</div>
                        <div className="resume-phone">Phone: {person.phone}</div>
                        <div className="resume-location">Location: {person.location}</div>
                    </div>
                </div>
                
                <div className="education">
                    {education.map((edu, index) => (
                        <div className="details" key={index}>
                            <div className="resume-institution">Institution: {edu.institution}</div>
                            <div className="resume-degree">Degree: {edu.degree}</div>
                            <div className="resume-year">Year: {edu.year}</div>
                        </div>
                    ))}
                </div>
            </div>
            
        
        </>
        
    );

}
export default CVBuilder;
