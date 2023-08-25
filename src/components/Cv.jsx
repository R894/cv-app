import { useState } from 'react';
import PersonalDetails from './PersonalDetails';

import Telephone from '../assets/telephone.png';
import Email from '../assets/letter.png';
import Location from '../assets/location.png';
import Section from './Section';

function CVBuilder(){

    const [person, setPerson] = useState({
        name: '',
        email: '',
        title: '',
        phone: '',
        location: ''
    });

    const [education, setEducation] = useState([]);

    const[experience, setExperience] = useState([]);

    const handleDetailsChange = (property, value) => {
        setPerson(prevPerson => ({
            ...prevPerson,
            [property]: value
        }));
    };

    const handleEducationChange = (property, value, index) => {
        setEducation(prevEducation => {
            const updatedEducation = [...prevEducation];
            updatedEducation[index] = {
                ...updatedEducation[index],
                [property]: value
            };
            return updatedEducation;
        });
    };

    const handleEducationAdd = () => {
        setEducation([...education, { institution: '',degree: '',year: ''}]);
    };

    const handleEducationDelete = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };

    const handleExperienceChange = (property, value, index) => {
        setExperience(prevExperience => {
            const updatedExperience = [...prevExperience];
            updatedExperience[index] = {
                ...updatedExperience[index],
                [property]: value
            };
            return updatedExperience;
        });
    };

    const handleExperienceAdd = () => {
        setExperience([...experience, { position: '', company: '',startDate: '', endDate:'', description:''}]);
    };

    const handleExperieceDelete = (index) => {
        const updatedExperience = experience.filter((_, i) => i !== index);
        setExperience(updatedExperience);
    };

    return(
        <>
            <div className="editor">
                <PersonalDetails person={person} onChange={handleDetailsChange} />
                <Section
                    name='Education'
                    data={education}
                    properties={['institution', 'degree','year']}
                    onChange={handleEducationChange}
                    onAdd={handleEducationAdd}
                    onDelete={handleEducationDelete}

                /> 
                <Section
                    name='Experience'
                    data={experience}
                    properties={['position', 'company', 'startDate','endDate', 'description']}
                    onChange={handleExperienceChange}
                    onAdd={handleExperienceAdd}
                    onDelete={handleExperieceDelete}
                />

            </div>
            
            <div className="resume-container">
                <div className="personal-info">
                    <h1 className="resume-name">{person.name}</h1>
                    <h2 className="resume-title">{person.title}</h2>
                    <div className="details">
                        <div className="resume-mail"><img src={Email} width="20px" height="20px"></img> {person.email}</div>
                        <div className="resume-phone"><img src={Telephone} width="20px" height="20px"></img> {person.phone}</div>
                        <div className="resume-location"><img src={Location} width="20px" height="20px"></img> {person.location}</div>
                    </div>
                </div>
                
                <div className="education">
                    <h3>Education</h3>
                    {education.map((edu, index) => (
                        <div className="details" key={index}>
                            <div className="resume-institution">Institution: {edu.institution}</div>
                            <div className="resume-degree">Degree: {edu.degree}</div>
                            <div className="resume-year">Year: {edu.year}</div>
                        </div>
                    ))}
                </div>

                <div className="experience">
                        <h3>Experience</h3>
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
