import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

const DateRangeModal = ({ranges, onChange, select}) => {
    const [isDateRangeVisible, setIsDateRangeVisible] = useState(false);

    const toggleDateRange = () => {
        setIsDateRangeVisible(!isDateRangeVisible);
      };

  return (
    <div className={`modal ${isDateRangeVisible ? "show" : ""}`} id="dateRangeModal" style={{ zIndex: 1050 }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Select Date Range</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={toggleDateRange}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <DateRange ranges={ranges} onChange={toggleDateRange} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default DateRangeModal