<script setup lang="ts">
import {FileTypeEnum, useFileStore} from "@/shared"
import {ref, defineProps, PropType, computed} from "vue";

const {initFiles} = useFileStore();

const props = defineProps({
  type:{
    type:Object as PropType<FileTypeEnum>,
    default:FileTypeEnum.Mediaplan,
  }
});

const isLoading = ref(false);

/** Заказ медиапланов */
const onClickOrder = async () => {
  isLoading.value=true;
  await initFiles(5,props.type);
  isLoading.value=false;
}

/** Возвраает цвет кнопки в зависисмости от типа */
const getColorButton = computed(() => {
  return props.type==FileTypeEnum.Mediaplan
      ?"#EE26C2":"#2676EE";
})

/** Возвраает текст в зависисмости от типа */
const getTextButton = computed(() => {
  // TODO: локализация
  return props.type==FileTypeEnum.Mediaplan
      ?"Заказать медиаплан":"Заказать отчет";
})

/** Возвраает текст в зависисмости от типа */
const getWidthButton = computed(() => {
  // TODO: локализация
  return props.type==FileTypeEnum.Mediaplan
      ?"210px":"166px";
})
</script>

<template>
<div class="wrapper-order-mediaplan">
  <v-btn
      height="43px"
      :width="getWidthButton"
      :color="getColorButton"
class="order-mediaplan"
      @click="onClickOrder"
      :loading="isLoading"
  >
    {{getTextButton}}
  </v-btn>
</div>
</template>

<style  lang="scss">
.wrapper-order-mediaplan{
  width: fit-content;

  .v-btn{
    text-transform: unset;
  }

  .order-mediaplan{
    border-radius: 21px;
  }
}
</style>