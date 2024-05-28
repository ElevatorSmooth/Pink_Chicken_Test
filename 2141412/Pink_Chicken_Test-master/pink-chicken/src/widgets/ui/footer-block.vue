<script setup lang="ts">
import {EN, Global, GrayLogo, RU, SmsTracking, Telegram, TUR, Wats} from "@/app/assets"
</script>

<template>
<div class="wrapper-footer-block">

  <div class="logo-image">
    <img :src="GrayLogo" alt="GrayLogo">
  </div>

  <div class="policy-confidential">
    <div class="text">
        <!--    TODO:локализация-->
        Политика конфиденциальности
    </div>
  </div>

  <div class="company-email">
      <img :src="SmsTracking" alt="SmsTracking">
      <div class="email">pinkchicken@adaurum.ru</div>
    </div>

  <div class="wrap-localization">
    <div class="selector-localization">
      <img :src="Global" alt="">
      <img :src="RU" alt="RU">
      <img :src="EN" alt="EN">
      <img :src="TUR" alt="TUR">
    </div>
  </div>

  <div class="social">
      <img :src="Telegram" alt="Telegram">
      <img :src="Wats" alt="Wats">
    </div>




</div>
</template>

<style scoped lang="scss">
.wrapper-footer-block {
  display: grid;
  background-color: #EBEBEB;
  //До 1000
  justify-content: center;
  height: 95px;
  grid-template-columns: minmax(0,339px) minmax(0,343px) minmax(0,284px) minmax(0,198px) minmax(0,276px);
  grid-template-areas:
      "block1 block2 block3 block4 block5";


  .logo-image,
  .policy-confidential,
  .company-email,
  .wrap-localization,
  .social{
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: end;
    height: 100%;
    font-size: 15px;
    line-height: 22px;
    font-weight: 500;
    color: #525252;
  }

  .row-two{
    display: none;
  }

  .logo-image{
    grid-area: block1;
  }

  .policy-confidential{
    grid-area: block2;
    @media(max-width: 1160px){
      justify-content: center;
    }
    .text{
      width: 237px;
    }
  }

  .company-email,
  .wrap-localization .selector-localization,
  .social{
    gap: 12px;
    @media(max-width: 1160px){
      gap: 4px;
    }
  }

  .company-email {
    grid-area: block3;
    .email {
      color: #525252;
      width: 183px;
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
    }
  }

  .wrap-localization {
    grid-area: block4;

    .selector-localization{
      display: flex;
      width: 133px;
      @media(max-width: 1160px){
        width: unset;
      }
    }
  }

  .social{
    grid-area: block5;
    justify-content: start;
    padding-left: 65px;

    @media(max-width: 1160px){
      padding-left: 10px;
      justify-content: center;

    }
  }

  @media(max-width:1280px){
    grid-template-columns:
        minmax(0,339px)
        minmax(0,343px)
        minmax(0,284px)
        minmax(0,198px)
        minmax(0,206px);
  }
  @media(max-width:1160px){
    grid-template-columns:
        minmax(0, 339px)
        minmax(0, 343px)
        minmax(0, 225px)
        minmax(0, 120px)
        minmax(0, 160px);
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    height: 162px;
    justify-content: left;
    padding: 32px 40px;
    row-gap: 26px;

    .logo-image{
      width: 250px;
      height: unset;
      order: 1;
    }
    .policy-confidential{
      width: calc(100% - 250px);
      order: 2;
    }

    .company-email{
      order: 5;
    }

    .wrap-localization{
      order: 4;
      margin-right: 64px;
      @media(max-width: 650px){
        margin-right: 24px;
      }
      .selector-localization{
        gap: 12px;
      }
    }
    .social{
      margin-right: 64px;
      order: 3;
      gap: 12px;
      @media(max-width: 650px){
        margin-right: 24px;
      }
    }

    .logo-image,
    .policy-confidential,
    .company-email,
    .wrap-localization,
    .social{
      padding: unset;
      align-items: center;
      height: 32px;
      justify-content: start;
    }
  }
  @media (max-width: 630px){
    background-color: #FFF;
  }
  @media(max-width: 630px){
    display: grid;
    height: unset;
    row-gap: 20px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "block1" "block2" "block4" "block3" "block5";

    .logo-image,
    .policy-confidential,
    .company-email,
    .wrap-localization,
    .social{
      width: unset;
      margin:unset;
    }
  }
}
</style>