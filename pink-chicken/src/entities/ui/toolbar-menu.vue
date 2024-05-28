<script lang="ts" setup>
import {ConvertCard, User,Setting,Login} from "@/app/assets/images";
import {ToolbarItem} from "@/entities/ui";
import {ToolbarItemModel} from "@/entities/models";
import {onMounted, onUnmounted, reactive, ref} from "vue";


/** переменная для хранения ширины экрана */
const marginPX = ref("");

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

/** обработчик события изменения размера экрана */
const handleResize = () => {
  if(window.innerWidth<=630){
    //TODO: локализация
    itemsMenu[0].Text = "5% выручки";
    return;
  }
  itemsMenu[0].Text = "5%";
};

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});


const itemsMenu = reactive([
  new ToolbarItemModel({
    Id:0,
    Icon:ConvertCard,
    Text:"marginPX.value",
    ColorButton:"#EE26C2",
    TextColorAfter680:"#797979",
    isHideButtonAter630:true,
    GapBetween:"8px"
  }),
  new ToolbarItemModel({
    Id:1,
    Icon:User,
    Text:"Username@adaurum.ru",
    WidthText:"185px",
    ColorButton:"#EE26C2",
    isHideButtonAter630:true,
    GapBetween:"10px"
  }),
])

const defaultItemToolbarMenu =[

  new ToolbarItemModel({
    Id:3,
    Icon:Setting,
    Text:"",
    ColorButton:"#FFFFFF",
  }),
  new ToolbarItemModel({
    Id:4,
    Icon:Login,
    Text:"",
    ColorButton:"#FFFFFF",
  }),
]





</script>

<template>
  <div class="wrapper-toolbar-menu">
    <div class="wrap-custom-tool-toolbar">
      <toolbar-item v-for="item in itemsMenu" :value="item" :key="item.Id"/>
    </div>
    <div class="wrap-default-tool-toolbar">
      <toolbar-item v-for="item in defaultItemToolbarMenu" :value="item" :key="item.Id"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-toolbar-menu{
  display: flex;
  gap: 26px;

  @media(max-width: 860px){
    //width: 100%;
    gap: 20px;
    //justify-content: space-between;
  }
  @media(max-width: 730px){
    width: 100%;
    justify-content: space-between;
  }
  .wrap-custom-tool-toolbar{
    display: flex;
    align-items: center;
    gap: 26px;

    @media(max-width: 860px){
      gap: 20px;
    }
    @media(max-width: 630px){
      gap: 4px;
      flex-direction: column-reverse;
      align-items: start;
      justify-content: start;
    }
  }

  .wrap-default-tool-toolbar{
    display: flex;
    align-items: center;
    gap: 12px;
  }



}
</style>