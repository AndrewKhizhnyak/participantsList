<template>
  <section>
    <img alt="avatar" :src="participant.avatar" />
    <div>{{ participant.fullName }}</div>
    <div>{{ participant.email }}</div>
    <span>{{ signUp }}</span>
  </section>
</template>

<script>
import { getSignUpText, monthNames } from "@/utils/helpers";

export default {
  name: "Participant",
  props: ["participant"],
  data() {
    return {
      signUp: "Loading...",
    };
  },
  mounted() {
    this.startTimer();
  },

  methods: {
    startTimer() {
      const signUp = new Date(this.participant.signUp);

      if (new Date().getTime() - signUp.getTime() >= 1.728e8) {
        const day = signUp.getUTCDate();
        const month = monthNames[signUp.getUTCMonth()];
        const year = signUp.getUTCFullYear();

        if (new Date().getUTCFullYear() === year) {
          this.signUp = day + " " + month;
        } else {
          this.signUp = day + " " + month + " " + year;
        }
      } else {
        const getTimeLeft = () => {
          this.signUp = getSignUpText(signUp);
        };

        setInterval(getTimeLeft, 1000);
      }
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  line-height: 48px;
  padding-left: 68px;
}
img {
  height: 48px;
  margin-right: 20px;
  width: 48px;
  border-radius: 50%;
}
div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 20px;
}
div:first-of-type {
  width: 202px;
}
div:last-of-type {
  width: 270px;
}
</style>
