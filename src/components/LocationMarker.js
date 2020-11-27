import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className='locationMarker' onClick={onClick}>
            <Icon className='locationMarker__icon' icon={locationIcon} />
        </div>
    );
};

export default LocationMarker;
