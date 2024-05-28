<script lang="ts" setup>
import {MediaplanCart,ShowMore} from "@/entities"
import {ArrowUp} from "@/app/assets"
import {ref, defineProps,defineEmits, PropType} from "vue";
import {FileModel, FileTypeEnum} from "@/shared";
import {ActionWithFile} from "@/features"

const props = defineProps({
  /** Заголовок аккордиона */
  title:{
    type:String,
    default:" Файлы"
  },
  /** Файлы одного типа */
  files:{
    type:Array as PropType<Array<FileModel>>
  },
  typeFiles:{
    type:Object as PropType<FileTypeEnum>,
    required: true
  }
})

const emits = defineEmits(["onShowMore"]);

const isOpen = ref(false);

/** Меняет флаг открытостипри выборе меню */
const onSelectMenu = (e:any) => {
  isOpen.value = e.value;
}

/** Вызывает событие "показать еще" c id последнего элемента (см. FileStore)*/
const onShowMore = (e:any) => {
  let lastItem = props.files && props.files.length
      ?props.files[props.files?.length -1]
      :undefined
  if(!lastItem) emits("onShowMore",0,props.typeFiles);
  emits("onShowMore",lastItem?.Id, props.typeFiles);
}


</script>

<template>
<div class="wrapper-accordion-file-list">
  <v-expansion-panels>
    <v-expansion-panel
        class="accordion-style-modificator"
        @group:selected="onSelectMenu"
        hide-actions

    >

      <template #title >
        <div class="accordion-title">
          {{title}}
        </div>
        <div class="v-expansion-panel-title__icon" >
          <img :src="ArrowUp" :class="isOpen? 'rotate':'no-rotate'" alt="ArrowUp">
        </div>
      </template>

      <template #text>
        <div class="wrap-mediaplans">
        <mediaplan-cart
            v-for="el in files"
            :key="el.Id"
            :id="el.Id"
            :file="el"
        >
          <template #action>
            <action-with-file :file="el"/>
          </template>
        </mediaplan-cart>
          <show-more @show-more="onShowMore"/>
        </div>
      </template>



    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<style  lang="scss">
.wrapper-accordion-file-list{

  .accordion-style-modificator{
    display: flex;
    flex-direction: column;
    gap: 20px;

    .v-expansion-panel-title{
      padding: 0;
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      min-height: 24px;

    }

    .v-btn--variant-elevated,
    .v-expansion-panel__shadow{
      box-shadow: none;
    }

    .wrap-mediaplans{
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .v-btn--icon{
      border-radius: 4px;
    }

    .v-expansion-panel-text__wrapper{
      padding: 0;
    }

    .rotate{
      rotate: 180deg;
    }
  }
}
</style>