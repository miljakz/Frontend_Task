<template>
  <div class="pomodoro-timer">
    <h2>Pomodoro Timer</h2>
    <div>{{ displayTime }}</div>
    <button @click="startTimer">{{ timerRunning ? 'Pause' : 'Start' }}</button>
    <button @click="resetTimer">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      remainingSeconds: 1500, // 25 minutes in seconds
      timerRunning: false
    };
  },
  computed: {
    displayTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  },
  methods: {
    startTimer() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.remainingSeconds > 0) {
            this.remainingSeconds--;
          } else {
            this.resetTimer();
            alert('Pomodoro finished. Take a break!');
          }
        }, 1000);
        this.timerRunning = true;
      } else {
        this.pauseTimer();
      }
    },
    pauseTimer() {
      clearInterval(this.timer);
      this.timer = null;
      this.timerRunning = false;
    },
    resetTimer() {
      this.pauseTimer();
      this.remainingSeconds = 1500; // Reset to 25 minutes
    }
  }
};
</script>

<style scoped>
.pomodoro-timer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
