<script setup lang="ts">
import {ContentBlock, MessengerBlock, TitlePersonalAssistantBlock} from "@/entities";
import {usePersonaAsistentStore} from "@/shared"
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";

const {initAssistant} = usePersonaAsistentStore();
const {getLastPersonalAssistant,getCorrespondence} = storeToRefs(usePersonaAsistentStore());
/** Флаг загрузки */
const isLoading = ref(false);

onMounted(async ()=>{
  await getAssistant();
})


/** Получение/смена ассистента */
const getAssistant = async (value=0) => {
  isLoading.value=true;
  await initAssistant();
  isLoading.value=false;
}

/** Обратная связь */
const onBackwardLinkage = (value:number) => {
  console.log("Обратная связь о работе сервиса ID ассистента: ",value)
}

</script>

<template>
  <div class="wrapper-personal-assistant-block">
    <!--TODO: ключ значение, для локализации-->
    <content-block
        paddingValue="26px 28px 28px"
        titleMargin="0 0 19px"
        :is-loading="isLoading"
        disable-scroll
    >
      <template #title>
        <title-personal-assistant-block
            :assistant="getLastPersonalAssistant"
            @onBackwardLinkage="onBackwardLinkage"
            @onChangeAssistant="getAssistant"
        />
      </template>
      <template #default>

        <messenger-block
            :messages="getCorrespondence"
        />


      </template>
    </content-block>
  </div>
</template>

<style lang="scss">
.wrapper-personal-assistant-block{
  display: flex;
  width: 100%;

  .v-menu__content {
    position: absolute !important;
  }


}
</style>