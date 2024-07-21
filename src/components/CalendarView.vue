<template>
  <div>
    <full-calendar :events="events" />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import eventService from '../services/eventService'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await eventService.fetchEvents();
        this.events = response.data;
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
  }
}
</script>

<style scoped>
/* Add any specific styles for your calendar here */
</style>
