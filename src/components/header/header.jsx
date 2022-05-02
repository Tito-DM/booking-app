import { FaBed, FaPlane, FaCar, FaTaxi, FaSnowboarding } from "react-icons/fa";

import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Search from "./components/search";

const Header = ({ type }) => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-list">
          <div className="header-listItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="header-listItem">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="header-listItem">
            <FaCar className="header-icon" />
            <span>Cars Rentals</span>
          </div>
          <div className="header-listItem">
            <FaSnowboarding />
            <span>Atrractions</span>
          </div>

          <div className="header-listItem">
            <FaTaxi />
            <span>Airpport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header-title">
              Alifetime of descounts? It´s a genius.
            </h1>
            <p className="header-description">
              Get reward fot your travels- unlock exclusive offers and discounts
              by saving 10% with free account
            </p>
            <button className="header-button">Get Started</button>
            <Search />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
