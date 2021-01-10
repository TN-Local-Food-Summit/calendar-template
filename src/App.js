import './App.css';
import Calendar from './components/Calendar/Calendar';

/*
{
    "eventType": conference or workshop
    "eventName": just the name
    "eventDate": year month day hours minutes
    "attendees": array of user ids probably
    "speakers": likely names but also may be ids? gonna start with just names for simplicity
    "description": text
    "links": not gonna start off with this one tbh
  }
*/

function App() {
  const today = new Date();
  return (
    <div>
      <Calendar
        events = {
          [
            {
              "eventType": "conference",
              "eventName": "test 1",
              "eventDate": today,
              "attendees": [],
              "speakers": ["John Doe"],
              "description": "The first test event",
              "links": []
            },
            {
              "eventType": "conference",
              "eventName": "test 2",
              "eventDate": today,
              "attendees": [],
              "speakers": ["John Doe"],
              "description": "The first test event",
              "links": []
            }
          ]
        }
      />
    </div>
  );
}

export default App;
