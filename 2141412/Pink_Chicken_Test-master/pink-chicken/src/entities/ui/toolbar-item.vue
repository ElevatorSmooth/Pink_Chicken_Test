<script lang="ts" setup>
import {defineProps, PropType, ref} from "vue";
import {ToolbarItemModel} from "@/entities/models";

const props = defineProps({
  value:{
    type: Object as PropType<ToolbarItemModel>,
  },
})

/** < bind css> */
const textColorAfter680 = ref(props.value?.TextColorAfter680??"#000");
const textColor = ref(props.value?.TextColor??"#000");
const widthText = props.value?.WidthText ??"unset";
const isHideButtonAter630 = props.value?.isHideButtonAter630 ?"none":"flex";

</script>

<template>
  <div class="wrapper-toolbar-item"
       :style="{ gap: value?.GapBetween }"
  >
    <v-btn
        class="action-button"
        height="40px"
        width="40px"
        :color="value?.ColorButton"
        icon
    >
      <v-icon>
        <img :src="value?.Icon" alt="logo" class="logo">
      </v-icon>
    </v-btn>
    <div class="toolbar-item-text">
      {{value?.Text}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-toolbar-item{
  display: flex;
  align-items: center;

  .toolbar-item-text{
    display: flex;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: v-bind(textColor);
    @media(max-width: 860px){
      font-size: 16px;
      width: v-bind(widthText);
      line-height: 19.36px;
    }
    @media(max-width: 630px){
      font-size: 14px;
      line-height: 17px;
      color: v-bind(textColorAfter680);
    }
  }

  .action-button{
    @media(max-width: 630px){
      display: v-bind(isHideButtonAter630);
    }
  }
}
</style>