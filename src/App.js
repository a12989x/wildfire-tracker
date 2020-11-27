import { useContext } from 'react';
import { HashLoader } from 'react-spinners';

import { WildfireContext } from './components/contexts/WildfireContext';

import Map from './components/Map';
import Header from './components/Header';

const App = () => {
    const { eventData, loading } = useContext(WildfireContext);

    return (
        <div className='app'>
            <Header />
            {!loading ? (
                <Map eventData={eventData} />
            ) : (
                <HashLoader loading={true} size={200} />
            )}
        </div>
    );
};

export default App;
