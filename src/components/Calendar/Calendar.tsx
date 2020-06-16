import React from "react";
import moment from "moment";
import {useState} from "react";

var firstOfMonth = () => {
    let dateObject = moment();
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
};

export const Calendar = (props) => {
    const [date, setDate] = useState(moment());
    let currentDay = () => {
        return date.format("D");
    };
    let weekdayshort = moment.weekdaysShort();
    var daysInMonth = () => {
        return date.daysInMonth();
    };
    let blanks = [];
    for (let i = 0; i < firstOfMonth(); i++) {
        blanks.push(<td className="calendar-day empty">{""}</td>);
    }

    let daysInMonthArr = [];
    for (let i = 0; i <= daysInMonth(); i++) {
        let day = i == currentDay() ? "today" : "";
        daysInMonthArr.push(
            <td key={i} className={`calendar-day ${day}`}>
                {i}
            </td>
        );
    }

    return (
        <div>
            Calendar
            {weekdayshort.map((day) => {
                return (
                    <th key={day} className="week-day">
                        {day}
                    </th>
                );
            })}
            {blanks.map((blank) => blank)}
            {daysInMonthArr.map((daysInMonth) => daysInMonth)}
        </div>
    );
};
