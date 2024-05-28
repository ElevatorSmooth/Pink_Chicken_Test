<script setup lang="ts">
import {ContentFiles} from "@/entities";
import {onMounted, ref} from "vue";
import {FileTypeEnum, useFileStore} from "@/shared";

const fileStore = useFileStore();

/** Флаг загрузки */
const isLoading = ref(false);

onMounted(async ()=>{
  await showMoreFiles();
})

/** Запрос большего кол-ва файлов */
const showMoreFiles = async (id=1,type=FileTypeEnum.Mediaplan) => {
  isLoading.value=true;
  await fileStore.initFiles(id,type);
  isLoading.value=false;
}

</script>

<template>
  <div class="wrapper-files-block">
    <!--TODO: ключ значение, для локализации-->
      <content-files
          class="content-files"
          title="Файлы"
          :files="fileStore.getAllFiles"
          v-model:is-loading="isLoading"
          @on-show-more-file="showMoreFiles"
      />

    <div class="button-file-report">
      <v-btn
          width="115px"
          height="41px"
          color="#CBCBCB"
      >
        <v-icon>
          <div class="wrap-text-button">
<!--            TODO:Локализация-->
            Медиапланы
          </div>
        </v-icon>
      </v-btn>

      <v-btn
          width="78px"
          height="41px"
          color="#CBCBCB"
          text="Отчеты"
      >
        <div class="wrap-text-button">
          <!--            TODO:Локализация-->
          Отчеты
        </div>
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-files-block{
  height: 100%;

  .content-files{

    @media(max-width: 630px){
      display: none;
    }
  }

  .button-file-report{
    display: none;
    @media(max-width: 630px){
      display: flex;
      gap: 12px;
      padding: 0 20px;
    }

    .wrap-text-button{
      padding: 12px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    }
  }
}
</style>