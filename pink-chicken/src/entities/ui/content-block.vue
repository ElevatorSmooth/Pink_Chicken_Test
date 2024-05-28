<script lang="ts" setup>
import {defineProps} from "vue"
import {PerfectScrollbar} from "vue3-perfect-scrollbar";

const props = defineProps({
  /** Паддинг у всего блока */
  paddingValue:{
    type:String,
    default:"0",
  },
  /** Паддинг у блока с контентом */
  contentPaddingValue:{
    type:String,
    default:"0",
  },
  /** Паддинг у блока с заголовком */
  titlePaddingValue:{
    type:String,
    default:"0",
  },
  /** Передача отступов заголовку */
  titleMargin:{
    type:String,
    default:"0",
  },
  /** Флаг загрузки */
  isLoading:{
    type:Boolean
  },
  /** Отключение скролла */
  disableScroll:{
    type:Boolean
  }
})



</script>

<template>
  <div class="wrapper-content-block">
    <div class="content-title">
      <slot name="title"></slot>
    </div>

    <template v-if="disableScroll">
      <div  class="content" v-if="!isLoading">
        <slot></slot>
      </div>
      <template v-else>
        <v-progress-circular class="custom-style-loader" color="#EE26C2" indeterminate/>
      </template>
    </template>

    <template v-else>
      <perfect-scrollbar v-if="!isLoading">
        <div  class="content">
            <slot></slot>
        </div>
      </perfect-scrollbar>
        <template v-else>
          <v-progress-circular class="custom-style-loader" color="#EE26C2" indeterminate/>
        </template>
    </template>


  </div>
</template>

<style  lang="scss">
.wrapper-content-block{
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: v-bind(paddingValue);
  box-shadow: 0px 0px 30px 0px #00000014;

  @media (max-width: 630px){
    background-color: #EBEBEB;
    padding: 0 ;
    box-shadow: none;

  }

  .content-title{
    font-family: Inter;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin: v-bind(titleMargin);
    padding: v-bind(titlePaddingValue);
    @media (max-width: 630px){
      padding: 0 20px;
      background-color: #FFF;
    }
  }

  .content{
    display: flex;
    max-height: 622px;
    width: 100%;
    padding: v-bind(contentPaddingValue);
    height: 100%;
    flex-direction: column;
    gap: 30px;
  }

  .custom-scroll {
    position: relative;
    max-height: 400px; /* Установите нужную высоту */
    overflow: hidden; /* Скрываем нативные полосы прокрутки */
  }

  /* Настройки стилей для perfect-scrollbar */
  .ps__rail-y {
    opacity: 1 !important; /* Полоса прокрутки всегда видима */
    background-color: transparent !important; /* Прозрачный фон */
    width: 6px;
    &:hover{
      width: 6px;
    }
  }

  .ps__thumb-y {
    background-color: #B5B5B5 !important; /* Цвет прокрутки */
    border-radius: 4px; /* Радиус для скругленных краев */
    width: 6px;
    right: 0px;
    &:hover{
      width: 6px;
    }
  }

  .ps__rail-x {
    display: none; /* Отключаем горизонтальную полосу прокрутки */
  }

  .custom-style-loader{
    margin: auto;
  }
}
</style>