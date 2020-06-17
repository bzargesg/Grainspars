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
    var totalMonthDays = [...blanks, ...daysInMonthArr];
    let rows = [];
    let cells = [];
    totalMonthDays.map((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalMonthDays.length - 1) {
            rows.push(cells);
        }
    });
    var daysinmonth = rows.map((d, i) => {
        return <tr>{d}</tr>;
    });

    return (
        <table className="calendar-day">
            <thead>
                {weekdayshort.map((day) => {
                    return (
                        <th key={day} className="week-day">
                            {day}
                        </th>
                    );
                })}
            </thead>
            <tbody>
                {rows.map((d) => (
                    <tr>{d}</tr>
                ))}
            </tbody>
        </table>
    );
};
