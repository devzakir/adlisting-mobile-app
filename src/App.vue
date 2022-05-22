<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  outline: 0;
}

header {
  background-color: #090a11;
  .top-nav {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    height: 40px;
    width: auto;
    img {
      height: auto;
      width: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
}

.wrapper {
  padding: 0px 24px;
  box-sizing: border-box;
}
</style>
