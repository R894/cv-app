import { useState } from 'react';
import PersonalDetails from './PersonalDetails';

import Telephone from '../assets/telephone.png';
import Email from '../assets/letter.png';
import Location from '../assets/location.png';
import Section from './Section';

export default function CVBuilder(){

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

    const handleDataChange = (dataSetter, index, property, value) => {
        dataSetter(prevData => {
            const updatedData = [...prevData];
            updatedData[index] = {
                ...updatedData[index],
                [property]: value
            };
            return updatedData;
        });
    };

    const handleDataAdd = (dataSetter, initialData) => {
        dataSetter(prevData => [...prevData, {...initialData }]);
    };

    const handleDataDelete = (dataSetter, index) => {
        dataSetter(prevData => {
            const updatedData = [...prevData];
            updatedData.splice(index,1);
            return updatedData;
        });
    };

    return(
        <div className='flex grow gap-40 justify-between p-20 items-center overflow-auto'>
            <div className="w-1/2 min-w-[20rem] min-h-[30rem] border-2 p-3 max-h-full overflow-auto">
                <PersonalDetails person={person} onChange={handleDetailsChange} />
                <Section
                    name='Education'
                    data={education}
                    properties={['institution', 'degree','year']}
                    onChange={(prop, val, index) => handleDataChange(setEducation, index, prop, val)}
                    onAdd={() => handleDataAdd(setEducation, { institution: '', degree: '', year: '' })}
                    onDelete={index => handleDataDelete(setEducation, index)}
                /> 
                <Section
                    name='Experience'
                    data={experience}
                    properties={['position', 'company', 'startDate','endDate', 'description']}
                    onChange={(prop, val, index) => handleDataChange(setExperience, index, prop, val)}
                    onAdd={() => handleDataAdd(setExperience, { position: '', company: '', startDate: '', endDate: '', description: '' })}
                    onDelete={index => handleDataDelete(setExperience, index)}
                />
            </div>
            
            <div className="w-1/2 min-w-[20rem] min-h-[30rem] border-2 p-3 max-h-full overflow-auto">
                <div className="border-b-2 pb-2">
                    <h1 className="text-2xl">{person.name}</h1>
                    <h2 className="text-1xl">{person.title}</h2>
                    <div className="flex justify-around">
                        {
                            person.email.length > 0 ? <div className="flex"><img src={Email} className='h-6 w-6 mr-2'></img> {person.email}</div> : null

                        }
                        {   
                            person.phone.length > 0 ? <div className="flex"><img src={Telephone} className='h-6 mr-2'></img> {person.phone}</div> : null
                        }
                        {
                            person.location.length > 0 ? <div className="flex"><img src={Location} className='h-6 mr-2'></img> {person.location}</div> : null
                        }
                    </div>
                </div>
                
                <div className="education">
                    {education.length > 0 ? (<h3 className='text-lg'>Education</h3>):null}
                    {education.map((edu, index) => (
                        <div className="border-2 flex-col my-2 p-2" key={index}>
                            <div className="resume-institution">Institution: {edu.institution}</div>
                            <div className="resume-degree">Degree: {edu.degree}</div>
                            <div className="resume-year">Year: {edu.year}</div>
                        </div>
                    ))}
                </div>

                <div className="experience">
                        {experience.length > 0 ? <h3 className='text-lg'>Experience</h3> :  null}
                        {experience.map((exp, index) =>(
                            <div className="border-2 flex-col my-2 p-2" key={index}>
                                <div className="resume-position">Position: {exp.position}</div>
                                <div className="resume-company">Company: {exp.company}</div>
                                <div className="resume-start-date">Start Date: {exp.startDate}</div>
                                <div className="resume-end-date">End Date: {exp.endDate}</div>
                                <div className="resume-description">Description: {exp.description}</div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        
    );

}


