import axios from 'axios';

const baseURL = '/api/events';

export default {
  fetchEvents() {
    return axios.get(baseURL);
  },
  addEvent(event) {
    return axios.post(baseURL, event);
  },
  updateEvent(event) {
    return axios.put(`${baseURL}/${event.id}`, event);
  },
  deleteEvent(eventId) {
    return axios.delete(`${baseURL}/${eventId}`);
  }
}

render.com