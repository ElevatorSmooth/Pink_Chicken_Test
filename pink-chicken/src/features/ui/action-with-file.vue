<script setup lang="ts">
import {FileModel, useFileStore} from "@/shared";
import {defineProps, PropType, ref} from "vue";

const props =defineProps({
  /** Обязательный файл */
  file:{
    type:Object as PropType<FileModel>,
    required: true
  }
});

/** Флаг для загрузки и блокировки повторных нажатий */
const isLoading =ref(false)

const fileStore = useFileStore();

/** Нажатие на кнопку действия карточки (правая) */
const onClickAction = async () => {
  isLoading.value = true;
  await fileStore.actionWithFiles(props.file?.Id,props.file?.Action);
  isLoading.value = false;
}
</script>

<template>
<div class="wrapper-action-with-file">
  <v-btn
      height="42px"
      width="42px"
      :color="file?.ActionColor"
      icon
      @click="onClickAction"
      :loading="isLoading"
  >
    <img :src="file?.Action" alt="Refresh" >
  </v-btn>
</div>
</template>

<style scoped lang="scss">

</style>