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
              "eventId": "3d3f4602-538c-11eb-ae93-0242ac130002",
              "eventType": "conference",
              "eventName": "test 1",
              "eventDate": today,
              "attendees": [],
              "speakers": ["John Doe"],
              "description": "The first test event",
              "links": []
            },
            {
              "eventId": "3d3f485a-538c-11eb-ae93-0242ac130002",
              "eventType": "conference",
              "eventName": "test 2",
              "eventDate": today,
              "attendees": [],
              "speakers": ["Jane Doe"],
              "description": "The second test event",
              "links": []
            }
          ]
        }
      />
    </div>
  );
}

export default App;
