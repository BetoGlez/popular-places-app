import React from 'react';
import './App.scss';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThumbUp } from '@material-ui/icons';
import Home from './Home/Home';

function App() {
    return (
        <div className="rate-places-app">
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h2' className="toolbar-title">
                        Places rating app
                    </Typography>
                    <ThumbUp className="toolbar-icon"/>
                </Toolbar>
            </AppBar>
            <Container>
                <Home />
            </Container>
        </div>
    );
}

export default App;
