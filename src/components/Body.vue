<template>
  <section>
    <header>
      <span>Participant</span>
      <span>Work email</span>
      <span>Signed up</span>
    </header>

    <div v-if="fetching" class="loader" />
    <div v-else>
      <div v-for="participant in participantList" :key="participant.id">
        <Participant :participant="participant" />
      </div>
    </div>

    <div v-show="scrolledToBottom" class="loader" />

    <footer v-if="participantList.length >= 50">
      <img src="@/assets/tick.svg" alt="tick" /><span>All users loaded</span>
    </footer>
  </section>
</template>

<script>
import { getParticipantList } from "@/utils/api";
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
      fetching: true,
      scrolledToBottom: false,
    };
  },
  watch: {
    scrolledToBottom(newValue) {
      if (newValue) {
        this.getMoreParticipants();
      }
    },
  },
  async mounted() {
    this.scroll();
    this.participantList = await getParticipantList();
    this.fetching = false;
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow && this.participantList.length < 50) {
          this.scrolledToBottom = true;
        }
      };
    },
    async getMoreParticipants() {
      const newParticipants = await getParticipantList();
      this.participantList = [...this.participantList, ...newParticipants];
      this.scrolledToBottom = false;
      this.scroll();
    },
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
header span {
  width: 80px;
}
header span:not(:first-child) {
  margin-left: 210px;
}
footer {
  background: #edf9f2;
  border-radius: 67px;
  color: #219653;
  height: 72px;
  line-height: 72px;
  margin: 42px auto;
  text-align: center;
  width: 694px;
}
footer span {
  font-size: 20px;
  margin-left: 18px;
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #f3f3f3;
  font-size: 20px;
  margin: 200px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>
