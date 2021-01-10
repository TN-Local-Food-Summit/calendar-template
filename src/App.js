import './App.css';
import Calendar from './components/Calendar/Calendar';


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
