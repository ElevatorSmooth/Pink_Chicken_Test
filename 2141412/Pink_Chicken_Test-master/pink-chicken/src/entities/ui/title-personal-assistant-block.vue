<script setup lang="ts">
import {VerticalDots} from "@/app/assets";
import {defineProps, defineEmits, PropType} from "vue";
import {Popper} from "vue-popper-lite";
import {PersonalAsistentModel} from "@/shared";

const props = defineProps({
  assistant:{
    type:Object as PropType<PersonalAsistentModel>,
    required:true,
  },
})
const emits = defineEmits(["onBackwardLinkage","onChangeAssistant"]);

/** Обратная связь о работе сервиса */
const onBackwardLinkage = () => {
  emits("onBackwardLinkage", props.assistant?.Id);
}

/** Сменить помошника */
const onChangeAssistant = () => {
  emits("onChangeAssistant", props.assistant?.Id);
}

</script>

<template>
<div class="wrapper-title-personal-assistant-block">
    <!--          TODO: Локализация-->
    <div class="assistant-info-title">

      <div class="title">
        Личный помошник
      </div>

      <popper
          trigger="clickToToggle"
          placement="bottom-start"
          content-class="content-popover"
          class="popover-adaptation-show"
          append-to-body
      >
        <!--TODO: Локализация-->
        <div class="backward-linkage" @click="onBackwardLinkage">Обратная связь о работе сервиса</div>
        <div class="change-assistant" @click="onChangeAssistant">Сменить помощника</div>

        <template #reference>
          <v-btn
              height="40px"
              width="40px"
              color="#F5F5F5"
              icon
          >
            <img :src="VerticalDots" alt="VDots" >
          </v-btn>
        </template>

      </popper>
    </div>


    <div class="wrap-name-email-action">
      <div class="wrap-name-email">
        <div class="assistant-info-name">{{assistant?.Name}}</div>
        <div class="assistant-info-email">{{assistant?.Email}}</div>
      </div>



      <popper
          trigger="clickToToggle"
          placement="bottom-start"
          content-class="content-popover"
          class="popover-adaptation-hide"
          append-to-body
      >
        <!--TODO: Локализация-->
        <div class="backward-linkage" @click="onBackwardLinkage">Обратная связь о работе сервиса</div>
        <div class="change-assistant" @click="onChangeAssistant">Сменить помощника</div>

        <template #reference>
          <v-btn
              height="40px"
              width="40px"
              color="#F5F5F5"
              icon
          >
            <img :src="VerticalDots" alt="VDots" >
          </v-btn>
        </template>

      </popper>
    </div>

</div>
</template>

<style scoped lang="scss">

.wrapper-title-personal-assistant-block{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .assistant-info-title{
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;

    @media(max-width: 630px){
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  .wrap-name-email-action{
    display: flex;
    gap: 10px;
    align-items: center;

    @media (max-width: 630px) {
      width: 100%;
    }

    .wrap-name-email{
      display: flex;
      gap: 10px;

      @media (max-width: 740px) {
        flex-direction: column;
        gap: 4px;
      }
      @media (max-width: 630px) {
        flex-direction: row;
        gap: 10px;
      }

      .assistant-info-name{
      font-size: 16px;
      font-weight: 600;
      line-height: 18px;
    }

      .assistant-info-email{
      font-size: 15px;
      font-weight: 400;
      line-height: 18px;
      color: #525252;
      margin-right: 16px;
    }
    }

  }


  .popover-adaptation-show{
    display: none;
  }
  @media(max-width: 630px){
    padding-bottom: 20px;
    flex-direction: column;
    .popover-adaptation-hide{
      display: none;
    }
    .popover-adaptation-show{
      display: flex;
    }
  }

}
</style>
<style lang="scss">
.content-popover {
  display: flex;
  justify-content: center;
  padding: 16px 30px;
  width: 332px;
  height: 82px;
  flex-direction: column;
  gap: 12px;
  border-radius: 8px;
  background-color: #FFF;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.08);

  .change-assistant,
  .backward-linkage{
    display: flex;
    justify-content: end;
    color: #EE26C2;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .change-assistant{
    color: #000;
  }
}
</style>