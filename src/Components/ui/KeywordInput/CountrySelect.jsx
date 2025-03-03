import React, { useState } from 'react';

const DropdownIcon = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3L5 7L9 3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CountrySelect = () => {
    const [selectedCountry, setSelectedCountry] = useState('India');

    const countries = ['United States','India', 'Canada', 'Mexico', 'United Kingdom', 'Germany'];

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div>
            {!selectedCountry ? (
                <button onClick={() => setSelectedCountry(countries[0])}>
                    <DropdownIcon />
                </button>
            ) : (
                <select id="country-select" value={selectedCountry} onChange={handleChange}>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default CountrySelect;
