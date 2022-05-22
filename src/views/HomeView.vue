<template>
  <main>
    <ion-page>
      <ion-header>
        <header>
          <div class="wrapper">
            <div class="top-nav">
              <RouterLink to="/" class="logo">
                <img src="@/assets/images/logo-white.png" alt="" />
              </RouterLink>
              <ion-icon color="light" size="small" :icon="notificationsOutline">
              </ion-icon>
            </div>
          </div>
        </header>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Tab 1</ion-title>
          </ion-toolbar>
        </ion-header>
        <div class="wrapper">
          <h1>Browse over 95,00,000 classified ads listing.</h1>
          <div class="search-card">
            <ion-item>
              <ion-icon :icon="searchOutline"></ion-icon>
              <ion-input placeholder="Ads tittle, keyword..."></ion-input>
            </ion-item>
            <ion-item>
              <ion-icon :icon="locationOutline"></ion-icon>
              <ion-input placeholder="Location"></ion-input>
            </ion-item>
            <ion-item>
              <ion-icon :icon="albumsOutline"></ion-icon>
              <ion-select
                :interface-options="customActionSheetOptions"
                interface="action-sheet"
                placeholder="Select Category"
              >
                <ion-select-option value="red">Red</ion-select-option>
                <ion-select-option value="purple">Purple</ion-select-option>
                <ion-select-option value="yellow">Yellow</ion-select-option>
                <ion-select-option value="orange">Orange</ion-select-option>
                <ion-select-option value="green">Green</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-button href="#" expand="block">
              <ion-icon :icon="searchOutline"></ion-icon>
              Search
            </ion-button>
          </div>
          <div class="category-block">
            <div class="block-header">
              <h3>Category</h3>
              <a href="#">View All</a>
            </div>
            <div class="category-card-wrapper">
              <div class="category-item">
                <ion-icon
                  :icon="notificationsOutline"
                  color="primary"
                ></ion-icon>
                <h4>Home & Garden</h4>
                <p>69,590 Ads</p>
              </div>
              <div class="category-item">
                <ion-icon
                  :icon="notificationsOutline"
                  color="primary"
                ></ion-icon>
                <h4>Home & Garden</h4>
                <p>69,590 Ads</p>
              </div>
              <div class="category-item">
                <ion-icon
                  :icon="notificationsOutline"
                  color="primary"
                ></ion-icon>
                <h4>Home & Garden</h4>
                <p>69,590 Ads</p>
              </div>
              <div class="category-item">
                <ion-icon
                  :icon="notificationsOutline"
                  color="primary"
                ></ion-icon>
                <h4>Home & Garden</h4>
                <p>69,590 Ads</p>
              </div>
              <div class="category-item">
                <ion-icon
                  :icon="notificationsOutline"
                  color="primary"
                ></ion-icon>
                <h4>Home & Garden</h4>
                <p>69,590 Ads</p>
              </div>
              <div class="category-item">
                <ion-icon
                  :icon="notificationsOutline"
                  color="primary"
                ></ion-icon>
                <h4>Home & Garden</h4>
                <p>69,590 Ads</p>
              </div>
            </div>
          </div>
          <div class="listing-block" style="margin-top: 20px">
            <div class="block-header">
              <h3 style="margin-bottom: 20px">Listing</h3>
            </div>
            <div class="listing-wrapper">
              <ion-card>
                <img src="../assets/images/nature.jpeg" alt="" />
                <ion-card-title>
                  <ion-item>
                    Ion-item in a card, icon left, button right
                  </ion-item>
                </ion-card-title>

                <ion-card-content>
                  This is content, without any paragraph or header tags, within
                  an ion-card-content element.
                </ion-card-content>
              </ion-card>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </main>
</template>

<script setup>
import {
  IonInput,
  IonItem,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonHeader,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonLabel,
  IonCardHeader,
  IonContent,
  IonCardSubtitle,
  IonThumbnail,
  IonImg,
} from "@ionic/vue";

import {
  searchOutline,
  locationOutline,
  albumsOutline,
  notificationsOutline,
} from "ionicons/icons";
</script>

<style lang="scss">
ion-item {
  padding-left: 0;
  --padding-start: 0;
}

.search-card {
  ion-icon {
    margin-right: 10px;
  }
  ion-button {
    color: var(--ion-color-light);
  }
}

.category-block {
  margin-top: 50px;
  .block-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
    }
  }
}

.category-card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  .category-item {
    width: calc(100% / 3 - 10px);
    text-align: center;
    padding: 12px 0px;
    border: 1px solid #ebeef7;
    border-radius: 4px;
    ion-icon {
      font-size: 24px;
      margin-bottom: 8px;
    }
    h4 {
      font-size: 14px;
      margin-bottom: 4px;
    }
    p {
      font-size: 12px;
      color: var(--ion-color-medium);
      margin-bottom: 0;
    }
  }
}
</style>
