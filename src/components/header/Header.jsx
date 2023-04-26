import "./header.css";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "date-fns/format";

import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDay,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPlane} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
            <div />

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDay} />
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
                className="headerSearchText"
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}{" "}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} />
              <span className="headerSearchText">
                {`${options.adult} adult ${options.children} children ${options.room} room`}
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <button className="optionCounterButton">-</button>
                  </div>
                </div>
              </span>

              <button className="headerBtn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
