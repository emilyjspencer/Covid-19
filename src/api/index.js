import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
      
        const selectedData = {
            confirmed: data.confirmed,  
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return selectedData

    } catch (error) {
        
    }
}