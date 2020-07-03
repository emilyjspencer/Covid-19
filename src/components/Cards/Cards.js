import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = (props) => {
console.log(props);

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
              <Grid item component={Card}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Infected</Typography>
                     <Typography variant="h5">Data Fetched</Typography>
                     <Typography color="textSecondary">Dates Fetched</Typography>
                     <Typography variant="body2">Number of active cases</Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card}>
                  <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                  <Typography variant="h5">Data fetched</Typography>
                  <Typography color="textSecondary">Dates fetches</Typography>
                  <Typography variant="body2">Number of recovered cases</Typography>
              </Grid>
              <Grid item component={Card}>
                  <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                  <Typography variant="h5">Data Fetched</Typography>
                  <Typography color="textSecondary">Dates fetched</Typography>
                  <Typography variant="body2">Number of deaths</Typography>
              </Grid>
            </Grid>
            
        </div>
    )
}

export default Cards; 