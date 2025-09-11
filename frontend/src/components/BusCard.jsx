import { PiRecord } from "react-icons/pi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoTimerOutline } from "react-icons/io5";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import busCard from '../assets/bus-card.png';
import '../styles/BusCard.css';

const BusCard = ({ 
    bus,
    isExpanded, 
    onToggleExpand,
    routeData
  }) => {
    return (
    <div className={`bus-card ${isExpanded ? 'expanded' : ''}`}>
        {/* Header */}
        <div className="bus-icon-card-header">
            <div className="bus-card-icon-container">
            <img src={busCard} alt="bus" className="bus-card-icon" />
            </div>
            <div className="bus-card-title">{bus.number}</div>
        </div>

        {/* Bus Info */}
        <div className="bus-info">
            <div className="bus-track-container">
                
            <div className="bus-stop-container">
                <div className='bus-track-icon-container'>
                    <PiRecord alt="from" className="bus-track-icon" />
                </div>
                <div className="bus-route-stop">
                    <div className="track-text">From</div>
                    <div className="stop">{bus.from}</div>
                </div>

                <PiDotsThreeVerticalBold alt="dots" className='bus-route-dots'/>
            </div>


            {/* Expanded Content */}
            {isExpanded && routeData.length > 0 && (
                <div className="expanded-route-section">
                    {routeData.map((stop, index) => (
                        <div key={index} className="bus-stop-container"> {/* Added container div and key */}

                            <div className='bus-track-icon-container'>
                                <PiRecord alt="route" className="bus-track-icon" />
                            </div>
                            <div className="bus-route-stop">
                                <div className="track-text">stop</div>
                                <div className="stop">{stop}</div>
                            </div>
                            <PiDotsThreeVerticalBold alt="dots" className='bus-route-dots'/>
                        </div>
                    ))}
                </div>
                 
            )}
            
            <div className="bus-stop-container">
                <div className='bus-track-icon-container'>
                    <PiRecord alt="to" className="bus-track-icon" />
                </div>
                <div className="bus-route-stop">
                    <div className="track-text">To</div>
                    <div className="stop">{bus.to}</div>
                </div>
            </div>
            </div>
            
            <div className="bus-travel-container">
            <div className="bus-distance-container">
                <LiaMapMarkerAltSolid alt="map-pin" className="bus-distance-icon bus-travel-icon" />
                <div className="bus-distance">{bus.distance}</div>
            </div>

            <div className="bus-duration-container">
                <div className="bus-duration-text track-text">Average</div>
                <div className='bus-duration-timing'>
                    <IoTimerOutline alt="time" className="bus-duration-icon bus-travel-icon" />
                    <div className="bus-duration">{bus.duration}</div>
                </div>
            </div>
            </div>
        </div>

        {/* Recommendation */}
        <div className="bus-recommendation-container">
            <div className="bus-recommendation">{bus.recommendation}</div>
        </div>

        {/* Details Button */}
        <div className="bus-card-button-container">
            <button 
            className="bus-card-button"
            onClick={onToggleExpand}
            >
                {isExpanded ? 'Hide Details' : 'Details'}
            </button>
        </div>

    </div>
    
    );
}

export default BusCard;