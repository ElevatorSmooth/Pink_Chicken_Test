<script lang="ts" setup>
import {ContentBlock} from "@/entities"

</script>

<template>
  <div class="wrapper-content-layout">

    <div class="content-layout-files">
      <slot name="files">

      </slot>
    </div>

  <slot name="content-layout-messenger">
      <slot name="messenger">

      </slot>
  </slot>


  </div>
</template>

<style  lang="scss">
.wrapper-content-layout{
  display: flex;
  gap: 30px;
  max-height: 100%;

  @media (max-width:1100px) {
    flex-direction: column;
  }
  @media (max-width:630px) {
    background-color: #FFF;
  }

  .content-layout-files{
    max-width: 295px;
    min-width: 295px;

    @media(max-width:1100px){
      max-width: 100%;
    }
  }




}
</style>