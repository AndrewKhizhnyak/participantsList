<template>
  <div id="app">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";

export default {
  name: "App",
  components: {
    Header,
    Body,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  margin: 0 auto;
  width: 830px;
}
</style>
