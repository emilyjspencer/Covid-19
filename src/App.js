import React, { Component } from 'react';

import { Cards, Chart, CountrySelector } from './components';
import image from './T.png';


import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {

    state = {
        data: {}, 
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });

    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country)

        console.log(data);
        console.log(country);

        this.setState({ data, country: country })
    }


    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data} />
                <CountrySelector handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;