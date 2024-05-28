<script lang="ts" setup>
import {HeaderLayout, ContentLayout} from "@/entities"
import {FilesBlock,PersonalAssistantBlock,FooterBlock} from "@/widgets";
</script>

<template>
  <div class="wrapper-page-personal-assistant">
    <header-layout/>
    <content-layout>
      <template #files>
        <files-block/>
      </template>

      <template #messenger>
        <personal-assistant-block/>
      </template>

    </content-layout>
  </div>
    <footer-block/>
</template>

<style scoped lang="scss">
.wrapper-page-personal-assistant{
  display: flex;
  flex-direction: column;
  padding: 32px 120px 60px;
  background-color: #F5F5F5;
  //min-height: 100vh;
  max-height: 100%;
  gap: 38px;


  @media(max-width: 1256px){
    padding: 32px 60px 60px;
  }

  @media(max-width: 768px){
    padding: 30px 40px 60px 40px ;
  }
  @media(max-width: 630px){
    gap: 0;
    background-color: #EBEBEB;
    padding: 0 0 37px 0;
    height: calc(100% - 20px);
  }
}
</style>