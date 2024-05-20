import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/SearchItem/SearchItem";
import MansourMahdia from '../assets/hotels/MansourMahdia.jpg'; 
import MouradiMahdia from '../assets/hotels/mouradimahdia.jpg'; 
import Houria from '../assets/hotels/houria.jpg'; 

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
                date[0]?.startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}</span>
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
              title="Iberostar Selection Royal El Mansour"
              distance="Hôtel à Mahdia"
              description="L'Iberostar Selection Royal El Mansour est situé à Mahdia, près des plages de la mer Méditerranée."
              price="TND 225,495"
              image={MansourMahdia}
              availabilityLink="/availability4" // Lien de disponibilité différent

            />
            <SearchItem
              title="El Mouradi Mahdia"
              distance="Hôtel à Mahdia"
              description="Situé sur une plage de la côte méditerranéenne, l'établissement El Mouradi Mahdia propose un hébergement 5 étoiles à 5 km de Mahdia et à 40 km de Monastir."
              price="TND 270,715"
              image={MouradiMahdia}
              availabilityLink="/availability5" // Lien de disponibilité différent

            />
            <SearchItem
              title="Houria House Sable D'or"
              distance="Mahdia"
              description="Cet hôtel est situé à Mahdia, juste en face de la plage. Il propose des hébergements climatisés offrant une vue sur la mer et le jardin. Le restaurant dispose d'une terrasse donnant sur la côte."
              price="TND 119,980"
              image={Houria}
              availabilityLink="/availability6" // Lien de disponibilité différent

            />
          </div>
        </div>
      </div>
    </div>
  );
}
