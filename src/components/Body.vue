<template>
  <section>
    <header>
      <span>Participant</span>
      <span>Work email</span>
      <span>Signed up</span>
    </header>

    <div v-for="participant in participantList" :key="participant.id">
      <Participant :participant="participant" />
    </div>
  </section>
</template>

<script>
import { getParticipantList } from "@/api/actions";
import Participant from "./Participant";

export default {
  name: "Body",
  components: {
    Participant,
  },
  data() {
    return {
      participantList: [
        { id: 0, avatar: "", fullName: "", email: "", signUp: "" },
      ],
    };
  },
  async mounted() {
    this.participantList = await getParticipantList();
  },
};
</script>

<style scoped>
section {
  margin-top: 20px;
}
header {
  color: #808080;
  display: flex;
  font-size: 12px;
  line-height: 24px;
  padding: 0 68px;
}
span {
  width: 80px;
}
span:not(:first-child) {
  margin-left: 210px;
}
</style>
