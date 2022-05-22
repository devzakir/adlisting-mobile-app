<template>
  <ion-card>
    <img src="../assets/images/nature.jpeg" alt="" />
    <ion-card-title class="listing-title">
      Toyota Allion A-15 Super Fresh 2008
    </ion-card-title>

    <div class="listing-footer">
      <div class="location">
        <ion-icon :icon="searchOutline"></ion-icon>
        <span>Location</span>
      </div>
      <div class="price">$ 16.39</div>
    </div>
  </ion-card>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import { searchOutline } from "ionicons/icons";
</script>

<style lang="scss">
.listing-title {
  font-size: 1rem;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
}
.listing-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 15px;
  .location {
    display: flex;
    align-items: center;
    ion-icon {
      margin-right: 5px;
    }
  }
}
</style>
