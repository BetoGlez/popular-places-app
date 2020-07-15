import React, { useState, useEffect } from 'react';
import './PlacesList.scss';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

interface Place {
    id: string;
    imgUrl: string;
    title: string;
    description: string;
}

const PlaceList: React.FC = () => {

    const [places, setPlaces] = useState<Array<Place>>([]);

    useEffect(() => {
        fetchPlaces();
    }, []);

    const fetchPlaces = () => {
        // TODO: Set places in local memory, this will be replaced with our database data
        setPlaces([
            {
                id: '1',
                imgUrl: 'https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                title: 'Madrid',
                description: 'Very sunny and beautiful city'
            },
            {
                id: '2',
                imgUrl: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                title: 'Paris',
                description: 'The City of Lights'
            },
            {
                id: '3',
                imgUrl: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                title: 'London',
                description: 'Rainy and nice place'
            },
            {
                id: '4',
                imgUrl: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                title: 'Rome',
                description: 'Lots of history in its streets!'
            },
            {
                id: '5',
                imgUrl: 'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                title: 'Greece',
                description: 'Perfect beach destination'
            }
        ]);
    };

    return (
        <div className="places-list">
            <Typography variant="h5" className="list-title">
                List of popular places
            </Typography>
            <GridList className="grid-list" cols={2.5}>
                {places.map((place) => (
                    <GridListTile key={place.id}>
                        <img src={place.imgUrl} alt={place.title} />
                        <GridListTileBar
                            title={place.title}
                            subtitle={place.description}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default PlaceList;
