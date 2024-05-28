<script setup lang="ts">
import {PerfectScrollbar} from "vue3-perfect-scrollbar";
import {Assistant} from "@/app/assets"
import {computed, defineProps, onMounted, onUnmounted, PropType, ref} from "vue";
import {MessageInput, OrderMediaplan} from "@/features";
import {FileTypeEnum, MessageModel} from "@/shared";
import {MessageHistory} from "@/entities";

/** вводимое сообщение */
const message = ref("");

const props = defineProps({
  isLoading:{
    type:Boolean,
  },
  messages:{
    type:Array as PropType<Array<MessageModel>>|undefined,
  }
})

/** Показывать или нет блок с сообщениями */
const isShowMessage = computed(() => {
  return props.messages && props.messages.length;
})

const scrollBlock = ref<HTMLElement | null>(null);

const preventBodyScroll = (prevent: boolean) => {
  console.log("prevent",prevent);
  document.body.style.overflow = prevent ? 'hidden !important' : 'auto !important';
};

onMounted(() => {
  const block = scrollBlock.value;

  if (block) {
    block.addEventListener('mouseenter', () => preventBodyScroll(true));
    block.addEventListener('mouseleave', () => preventBodyScroll(false));
  }
});

onUnmounted(() => {
  preventBodyScroll(false);
  const block = scrollBlock.value;
  if (block) {
    block.removeEventListener('mouseenter', () => preventBodyScroll(true));
    block.removeEventListener('mouseleave', () => preventBodyScroll(false));
  }
});


</script>

<template>
  <div class="wrapper-messenger-block" ref="scrollBlock">

    <div class="wrap-chat-history">

      <div class="wrap-no-message" v-if="!isShowMessage">
        <img :src="Assistant" alt="Assistant">
        <!--TODO: локализация-->
        <div class="no-messages-text">
          Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и узнать о ходе работы
        </div>
      </div>

      <perfect-scrollbar v-else>
        <message-history  :messages="messages"/>
      </perfect-scrollbar>
    </div>

    <div class="wrap-orders">
      <message-input class="message-input-parent" />
      <order-mediaplan class="child-order" :type="FileTypeEnum.Mediaplan"/>
      <order-mediaplan class="child-order child-report" :type="FileTypeEnum.Report"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-messenger-block{
  display: grid;
  grid-template-rows: minmax(452px,1fr) 144px;
  background-color: #EBEBEB;
  border-radius: 20px;

  @media(max-width: 630px){
    border-radius: 0;
  }

  .wrap-chat-history{
    display: flex;
    flex-direction: column;


    .wrap-no-message{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 20px 0;
      gap: 20px;

      .no-messages-text{
        display: flex;
        width: 470px;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;

        @media(max-width: 680px){
          word-break: break-word;
          width: 363px;
        }
      }
    }

  }

  .wrap-orders{
    position: relative;

    @media(max-width: 630px){
      margin: 0 20px;
    }

    .child-order{
      position: absolute;
      top: -63px;
      left: 20px;

      &.child-report{
        left: 250px;
      }

      @media(max-width: 630px){
        top: unset;
        left: unset;
        right: 0;
        top: -61px;

        &.child-report{
          right: 0;
          top: -116px;
          left: unset;

        }
      }
    }
  }

  .no-scroll {
    overflow: hidden !important;
  }
}
</style>