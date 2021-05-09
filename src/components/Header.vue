<template>
  <header>
    <span class="tip">Left until the draw</span>
    <span class="date">{{ timeLeft }}</span>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      timeLeft: "Loading...",
      timerInterval: 0,
    };
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    },
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
    },
    startTimer() {
      const getTimeLeft = () => {
        const untilTime =
          new Date().setHours(23, 59, 59, 999) - new Date().getTime();
        this.timeLeft = `${Math.floor(
          (untilTime / (1000 * 60 * 60)) % 24
        )}H ${Math.floor((untilTime / (1000 * 60)) % 60)}M ${Math.floor(
          (untilTime / 1000) % 60
        )}S`;
      };

      this.timerInterval = setInterval(getTimeLeft, 1000);
    },
  },
};
</script>

<style scoped>
header {
  background: #f3f3f3;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  height: 110px;
  margin-top: 60px;
  padding: 28px 68px;
}
.tip {
  font-size: 12px;
  font-weight: 600;
}
.date {
  font-size: 56px;
  font-weight: 600;
  line-height: 80px;
  padding-top: 13px;
}
</style>
