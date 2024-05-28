<script lang="ts" setup>
import {defineProps,defineEmits} from "vue"

const props = defineProps({
  /** Текст записи */
  value:{
    type:String,
    default:"Показать еще"
  }
})

const emits = defineEmits(["showMore"])

/** Вызывает событие загрузки доп записей */
const onClickMore = () => {
  emits("showMore");
}

</script>

<template>
  <div class="wrapper-show-more">
    <div class="show-more-clickable" @click="onClickMore">{{value}}</div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-show-more{
  display: flex;
  width: 100%;
  justify-content: end;
  .show-more-clickable{
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #EE26C2;
    cursor: pointer;
  }
}
</style>