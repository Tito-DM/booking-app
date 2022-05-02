import { useState } from "react";
import { FaBed, FaCalendar, FaMale } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Search = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div className="header-search">
      <div className="header-search-item">
        <FaBed className="header-icon" />
        <input
          type="text"
          className="header-search-input"
          placeholder="Where do you want to go?"
        />
      </div>
      <div className="header-search-item">
        <FaCalendar className="header-icon" />
        <span onClick={() => setIsOpen(!isOpen)} className="header-search-text">
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>
        {isOpen && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />
        )}
      </div>
      <div className="header-search-item">
        <FaMale className="header-icon" />
        <span
          onClick={() => setOptionsOpen(!optionsOpen)}
          className="header-search-text"
        >
          {`${options.adult} Adult, ${options.children} Children ${options.room} Room`}
        </span>
        {optionsOpen && (
          <div className="options">
            <div className="options-item">
              <span className="options-text">Adults</span>
              <div className="options-button-container">
                <button
                  className="options-button add"
                  onClick={() =>
                    setOptions({ ...options, adult: options.adult + 1 })
                  }
                >
                  +
                </button>
                <button
                  className="options-button remove"
                  onClick={() =>
                    setOptions({ ...options, adult: options.adult - 1 })
                  }
                >
                  -
                </button>
                <div></div> {/* to fix the button size */}
              </div>
            </div>

            <div className="options-item">
              <span className="options-text">Children</span>
              <div className="options-button-container">
                <button
                  className="options-button add"
                  onClick={() =>
                    setOptions({
                      ...options,
                      children: options.children + 1,
                    })
                  }
                >
                  +
                </button>
                <button
                  className="options-button remove"
                  onClick={() =>
                    setOptions({
                      ...options,
                      children: options.children - 1,
                    })
                  }
                >
                  -
                </button>
                <div></div> {/* to fix the button size */}
              </div>
            </div>

            <div className="options-item">
              <span className="options-text">Room</span>
              <div className="options-button-container">
                <button
                  className="options-button add"
                  onClick={() =>
                    setOptions({ ...options, room: options.room + 1 })
                  }
                >
                  +
                </button>
                <button
                  className="options-button remove"
                  onClick={() =>
                    setOptions({ ...options, room: options.room - 1 })
                  }
                >
                  -
                </button>
                <div></div> {/* to fix the button size */}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="header-search-item">
        <button className="header-button">Search</button>
      </div>
    </div>
  );
};
export default Search;
