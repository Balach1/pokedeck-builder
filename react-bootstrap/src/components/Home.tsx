import React from 'react';
import { 
    Button,
    Grid, 
    Jumbotron,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.css'; 

export default class Home extends React.Component {
    public render() {
        return (
            <Grid> 
                <Jumbotron>
                    <h2>Welcome</h2>
                    <p>Website with Ract + bootstrap</p>
                </Jumbotron>
                <Link to="/about">
                <Button bsStyle="primary">About</Button>                  
                </Link>
            </Grid>
        )
    }
}