import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountrySelector.module.css';



    const CountrySelector = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setCountries(await fetchCountries());
        }

            fetchApi();
        }, []);

        
    

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect id="dropdown2" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                <option id="dropdown" color="white" value="">Global Daily Data - click the dropdown to select a country</option>
                {countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                <h1>Test</h1>
            </NativeSelect>
        </FormControl>
    )
}


export default CountrySelector;
