<script lang="ts" setup>
import {computed, defineProps, PropType,defineEmits} from "vue";
import {FileModel} from "@/shared";

const props = defineProps({
  /** Файл */
  file:{
    type:Object as PropType<FileModel>,
    required: true
  }
});


/** Получение полноценной строкиимени файла, как на макете */
const getNameFile = computed(()=>{
  return `${props.file?.Name} ${props.file?.CountSucsess}/${props.file?.AllCount}`;
})

</script>

<template>
  <div class="wrapper-mediaplan-cart">
      <div class="mediaplan-main-part">
        <div class="mediaplan-wrap-icon-name">
          <img :src="file?.TypeIcon" class="mediaplan-icon" alt="XmlIcon">
          <div class="mediaplan-name">{{ getNameFile }}</div>
        </div>
        <slot name="action">

        </slot>
      </div>
      <div class="mediaplan-notif" v-if="true">
        <img :src="file?.StatusImage" alt="Refresh" >
        <div class="mediaplan-notif-message">
          {{file?.Status}}
        </div>
      </div>
  </div>

</template>

<style lang="scss">
.wrapper-mediaplan-cart{

    display: flex;
    flex-direction: column;
    gap: 8px;

    .mediaplan-main-part{
      display: flex;
      background-color: #F5F5F5;
      font-size: 15px;
      line-height: 20px;
      font-weight: 400;
      border-radius: 4px;
      justify-content: space-between;

      .mediaplan-wrap-icon-name{
        display: flex;
        gap: 8px;
        align-items: center;
        padding: 9px 0 9px 9px;

        .mediaplan-icon{
          width: 24px;
          height: 24px;
        }

        .mediaplan-name{
          font-size: 15px;
          line-height: 20px;
          font-weight: 400;
        }
      }
    }

    .mediaplan-notif{
      display: flex;
      gap: 5px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      padding-bottom: 6px;
    }
}

</style>