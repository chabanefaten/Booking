import React, { useState } from "react"; 
import Navbar from "../components/Navbar"; 
import Header from "../components/header/Header"; 
import { useLocation } from "react-router-dom"; 
import { format } from "date-fns"; 
import SearchItem from "../components/SearchItem/SearchItem"; 
import "./list/list.css";
import IberoStarham from '../assets/hotels/IberoStarham.jpg'; 
import BelAzurHam from '../assets/hotels/belAzurHam.jpg';
import RoyalAzureHam from '../assets/hotels/RoyalAzureHam.jpg'; 
import { DateRange } from "react-date-range"; // Importez DateRange depuis react-date-range


export default function Destination1() {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state?.destination || "");
    const [date, setDate] = useState(location.state?.date || [{ startDate: new Date(), endDate: new Date() }]);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state?.options || { adult: 1, children: 0, room: 1 });
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
          <SearchItem
        title="Iberostar Averroes"
        distance="8.6 km from center"
        description="Beachfront"
        features="Located in Yasmine Hammamet, on the Tunisian coast, 600 meters from Carthage Land amusement park."
        price="
        TND 276,799"
        image={IberoStarham} 
        availabilityLink="/availability1" // Lien de disponibilité différent

      />
      <SearchItem
        title="Hotel Bel Azur Thalasso & Bungalows"
        distance="0.9 km from center"
        description="Beachfront"
        features="Situated directly on Hammamet Beach, in a beautiful 12-hectare garden, near the city center and the Medina."
        price="TND 255 "
        image={BelAzurHam} 
        availabilityLink="/availability2" // Lien de disponibilité différent

      />
      <SearchItem
        title="Royal Azur Thalassa"
        distance="1.3 km from center"
        description="Beachfront"
        features="Located in Hammamet, steps away from the beaches, Royal Azur Thalassa offers an outdoor pool, free private parking, a garden, and a shared lounge."
        price="TND 290"
        image={RoyalAzureHam} 
          availabilityLink="/availability3" // Lien de disponibilité différent
          />
        
        
      

    </div>
            
          </div>
        </div>
      </div>
    
  );
}
