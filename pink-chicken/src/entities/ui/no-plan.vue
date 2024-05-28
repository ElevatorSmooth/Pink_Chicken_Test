<script lang="ts" setup>
import {ExplorerTabs} from "@/app/assets";

</script>

<template>
  <div class="wrapper-no-plan">
      <img :src="ExplorerTabs" alt="explorer-tabs"/>
      <div class="no-plans-text">
        Закажи у личного помощника медиаплан. Он появится в этом разделе
      </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-no-plan {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  gap: 30px;

  @media(max-width:1100px){
    flex-direction: row;
    justify-content: center;

    & img {
      margin:16 0 37px 86px;
    }

    .no-plans-text{
      text-align: start;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      width: 255px;
    }
  }

  @media (max-width: 860px) {
    justify-content: unset;
    gap: 19.31px;
    & img {
      margin:0 0 37px 66px;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    & img{
      margin:0;
    }
    .no-plans-text{
      text-align: center;
    }
  }
}
</style>