import React, { Component } from 'react';

import { Cards, Chart, CountrySelector } from './components';
import image from './T.png';


import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {

    state = {
        data: {}, 
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });

    }


    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={this.state.data} />
                <CountrySelector />
                <Chart />
            </div>
        )
    }
}

export default App;