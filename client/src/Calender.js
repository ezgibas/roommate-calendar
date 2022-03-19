import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Calendar, momentLocalizer } from 'react-big-calendar'
// import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const localizer = momentLocalizer(moment);

export const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{height: 500}}
    />
  </div>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
