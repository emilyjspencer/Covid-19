import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountrySelector.module.css';

const CountrySelector = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        }

            fetchApi();
        }, [setFetchedCountries]);

        console.log(fetchedCountries);
    

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                <h1>Test</h1>
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector;
