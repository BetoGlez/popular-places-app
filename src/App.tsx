import React from 'react';
import './App.scss';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Home from './pages/Home/Home';

function App() {
    return (
        <div className="popular-places-app">
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h4' className="toolbar-title">
                        Popular places app
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Home />
            </Container>
        </div>
    );
}

export default App;
