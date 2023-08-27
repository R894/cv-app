function PersonalDetails({person, onChange}){
    const handleInputChange = (property, event) => {
        const newValue = event.target.value;
        onChange(property, newValue);
    };

    
    return (
        <div className='border-2 flex-col my-2 p-2'>
            <h2>Personal Details</h2>       
                <input 
                    placeholder='Full name'
                    onChange={(event) => handleInputChange('name', event)}
                />
                <input 
                    placeholder='Title'
                    onChange={(event) => handleInputChange('title', event)}
                />
                <input 
                    placeholder='Email'
                    onChange={(event) => handleInputChange('email', event)}
                />
                <input 
                    placeholder='Phone'
                    onChange={(event) => handleInputChange('phone', event)}
                />
                <input 
                    placeholder='Location'
                    onChange={(event) => handleInputChange('location', event)}
                />
        </div>
    );
}

export default PersonalDetails;