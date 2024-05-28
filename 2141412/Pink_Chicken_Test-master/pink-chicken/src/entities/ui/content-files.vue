<script setup lang="ts">
import {AccordionFileList, ContentBlock, NoPlan} from "@/entities";
import {defineProps, defineEmits, PropType, computed, onUnmounted, onMounted, ref} from "vue";
import {FileModel, FileTypeEnum} from "@/shared";

const props = defineProps({
  /** Заголовок */
  title:{
    type:String,
    default:"Файлы",
  },
  /** Массив несортированнных по типу файлов */
  files:{
    type:Array as PropType<Array<FileModel>>
  },
  /** Флаг загрузки */
  isLoading:{
    type:Boolean
  }
})

const emits = defineEmits(["onShowMoreFile",])

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize);
});

/** Возвращает массив файлов категории медиаплан или пустой массив */
const getMediaplan = computed(() => {
  if(!props.files || !props.files.length) return[];
  return props.files.filter(x=>x.TypeFile === FileTypeEnum.Mediaplan);
})

/** Возвращает массив файлов категории медиаплан или пустой массив */
const getReports = computed(() => {
  if(!props.files || !props.files.length) return[];
  return props.files.filter(x=>x.TypeFile === FileTypeEnum.Report);
})

/** Показать больше файлов */
const showMoreFile = (id:number,type:FileTypeEnum) => {
  emits("onShowMoreFile",id,type);
}

/** переменная для хранения ширины экрана */
const marginPX = ref("");

/** обработчик события изменения размера экрана */
const handleResize = () => {
  if(window.innerWidth<=768){
    marginPX.value = "0 0 5px";
    return;
  }
  marginPX.value = "0 0 30px";
};



onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});


</script>

<template>
<div class="wrapper-content-files">
  <content-block
      paddingValue="28px 0 50px"
      contentPaddingValue="0 20px"
      titlePaddingValue="0 20px"
      :titleMargin="marginPX"
    :is-loading="isLoading"
  >
    <template #title>
      {{title}}
    </template>
    <template  #default>

      <no-plan v-if="!files || !files.length"/>
      <template v-else>
<!--TODO: ключ значение, для локализации-->
        <accordion-file-list
            title="Медиапланы"
            :files="getMediaplan"
            :type-files="FileTypeEnum.Mediaplan"
            @onShowMore="showMoreFile"
        />
        <accordion-file-list
            title="Отчеты"
            :files="getReports"
            :type-files="FileTypeEnum.Report"
            @onShowMore="showMoreFile"

        />
      </template>
    </template>



  </content-block>
</div>
</template>

<style scoped lang="scss">
.wrapper-content-files{
  height: 100%;
}
</style>