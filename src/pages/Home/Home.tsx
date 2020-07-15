import React from 'react';
import './Home.scss';
import PlaceList from '../../components/PlacesList/PlaceList';
import PlaceForm from '../../components/PlaceForm/PlaceForm';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="places-list">
                <PlaceList />
            </div>
            <div className="places-form">
                <PlaceForm />
            </div>
        </div>
    );
};

export default Home;