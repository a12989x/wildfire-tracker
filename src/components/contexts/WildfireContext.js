import { useState, useEffect, createContext } from 'react';

export const WildfireContext = createContext();

const WildfireContextProvider = ({ children }) => {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);

            const res = await fetch(
                'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
            );
            const { events } = await res.json();

            setEventData(events);
            setLoading(false);
        };

        fetchEvents();
    }, []);

    return (
        <WildfireContext.Provider value={{ eventData, loading }}>
            {children}
        </WildfireContext.Provider>
    );
};

export default WildfireContextProvider;
