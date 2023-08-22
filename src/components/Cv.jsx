import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';

function CVBuilder(){

    const [person, setPerson] = useState({
        name: '',
        email: '',
        title: '',
        phone: '',
        location: ''
    });

    const [education, setEducation] = useState([
        { institution: '', degree: '', year: '' },
    ]);

    const[experience, setExperience] = useState([
        { position: '', company: '', startDate: '', endDate:'', description: ''}
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

    const handleExperienceChange = (index, property, newValue) => {
        const updatedExperience = [...experience];
        updatedExperience[index] = {...updatedExperience[index], [property]: newValue };
        setExperience(updatedExperience);
    };

    const handleAddExperience = () => {
        setExperience([...experience, { position: '', company: '', startDate: '', endDate:'', description: ''}]);
    };

    const handleDeleteExperience = (index) => {
        const updatedExperience = [...experience];
        updatedExperience.splice(index, 1);
        setExperience(updatedExperience);
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
                <Experience 
                    experience={experience}
                    onChange={handleExperienceChange}
                    onAdd={handleAddExperience}
                    onDelete={handleDeleteExperience}
                />

            </div>
            
            <div className="resume-container">
                <div className="personal-info">
                    <h1 className="resume-name">{person.name}</h1>
                    <h2 className="resume-title">{person.title}</h2>
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

                <div className="experience">
                        {experience.map((exp, index) =>(
                            <div className="details" key={index}>
                                <div className="resume-position">Position: {exp.position}</div>
                                <div className="resume-company">Company: {exp.company}</div>
                                <div className="resume-start-date">Start Date: {exp.startDate}</div>
                                <div className="resume-end-date">End Date: {exp.endDate}</div>
                                <div className="resume-description">Description: {exp.description}</div>
                            </div>
                        ))}
                </div>
            </div>
            
        
        </>
        
    );

}
export default CVBuilder;
