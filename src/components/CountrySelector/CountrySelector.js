import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountrySelector.module.css';

const CountrySelector = () => {

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                <h1>Test</h1>
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector;
