<template>
  <section>
    <img alt="avatar" :src="participant.avatar" />
    <div>{{ participant.fullName }}</div>
    <div>{{ participant.email }}</div>
    <span>{{ getSignUpDate(participant.signUp) }} days ago</span>
  </section>
</template>

<script>
export default {
  name: "Participant",
  props: ["participant"],
  methods: {
    getSignUpDate(date) {
      return new Date(date).getUTCDay();
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
