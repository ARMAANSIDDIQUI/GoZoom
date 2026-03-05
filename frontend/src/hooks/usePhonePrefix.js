import { useState, useEffect } from 'react';

// Maps country ISO codes to dial codes (no emojis - use react-phone-input-2 for flags)
const countryDialMap = {
    US: '+1', CA: '+1', GB: '+44', IN: '+91',
    AU: '+61', AE: '+971', DE: '+49', FR: '+33',
    SG: '+65', PK: '+92',
};

/**
 * Detects the user's country via ipapi.co and returns the matching ISO country code.
 * Used to set the default in react-phone-input-2 via its `country` prop.
 * Falls back to 'us' on any error.
 */
export const usePhoneCountry = () => {
    const [country, setCountry] = useState('us');

    useEffect(() => {
        fetch('https://ipinfo.io/json')
            .then(r => r.json())
            .then(data => {
                if (data.country) {
                    setCountry(data.country.toLowerCase());
                }
            })
            .catch(() => { }); // silently fall back to 'us'
    }, []);

    return country;
};
