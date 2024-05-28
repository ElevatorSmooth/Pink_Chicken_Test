<script lang="ts" setup>
import {defineEmits} from "vue"
import {ConvertCard, Logo, User} from "@/app/assets/images";
import {ToolbarMenu} from "@/entities"

const emits = defineEmits(["onClickLogo"])

/** Событие клика на логотип сайта */
const onClickLogo = (e:Event)=>{
  emits("onClickLogo",e);
}

</script>

<template>
<div class="wrapper-header-layout">
    <img
        :src="Logo"
        alt="logo"
        class="logo"
        @click="onClickLogo"
    >
    <toolbar-menu/>
</div>
</template>

<style scoped lang="scss">
.wrapper-header-layout{
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  @media(max-width:860px){
    .logo{
      width: 209px;
      height: 29px;
    }
  }
  @media(max-width:730px){
    flex-direction: column;
    align-items: start;
    gap: 20px;
    .logo{
      align-items: start;
      justify-content: start;
      width: unset;
      height: 24px;
    }
  }
  @media(max-width:630px){
    padding: 28px 20px 20px 20px;
    background-color: #fff;
  }

}

</style>