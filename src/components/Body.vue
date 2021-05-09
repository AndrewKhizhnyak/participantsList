<template>
  <section>
    <header>
      <span>Participant</span>
      <span>Work email</span>
      <span>Signed up</span>
    </header>
    <ParticipantList />
  </section>
</template>

<script>
import ParticipantList from "./ParticipantList";

export default {
  name: "Body",
  components: {
    ParticipantList,
  },
};
</script>

<style scoped>
section {
  margin-top: 50px;
}
header {
  color: #808080;
  display: flex;
  font-size: 12px;
  justify-content: space-around;
  line-height: 24px;
}
</style>
