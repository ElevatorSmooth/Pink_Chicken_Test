<script setup lang="ts">
import {computed, defineProps, PropType, ref} from "vue";
import {MessageModel} from "@/shared";
import {JimDavidson} from "@/app/assets"
import moment from 'moment';
import 'moment/locale/ru';
import {PerfectScrollbar} from "vue3-perfect-scrollbar";

moment.locale('ru');


const props = defineProps({
  messages:{
    type:Array as PropType<Array<MessageModel>>|undefined,
  }
})

/** Возвращает отсортироанные по дате сообщения */
const getSortMessage = computed(()=>{
  if(!props.messages || !props.messages?.length) return[];
  let sorted =props.messages;
  sorted = sorted.sort((a,b)=>a.DatePublic-b.DatePublic);
  return sorted;
})

/** Получение текста даты (заголовок) */
const getDateText = (timestamp:number) => {
  const now = moment();
  const date = moment(timestamp);

  if (date.isSame(now, 'day')) {
    return `Сегодня, ${date.format('HH:mm')}`;
  } else if (date.isSame(now.subtract(1, 'days'), 'day')) {
    return `Вчера, ${date.format('HH:mm')}`;
  } else {
    return date.format('DD.MM.YYYY, HH:mm');
  }
}

/** Получение текста времени (сообщение) */
const getTimeText = (timestamp:number) => {
  const now = moment();
  const date = moment(timestamp);

    return `${date.format('HH:mm')}`;

}

/** Выставляется автор */
const getAuthor = (el:number)=>{
  return !el?"Jim":"";
}

/** Проверка на ассистента */
const isAssistant = (el:number) => {
  return !el;
}

</script>

<template>
  <div class="wrapper-message-history">

    <div class="date-time">{{getDateText(getSortMessage[0].DatePublic)}}</div>

    <div class="message-cart"
         v-for="el in messages"
         :key="el.Id"
         :style="{alignSelf : !isAssistant(el.Author)?'end':'unset'}"
    >
      <div class="img-message">
        <img :src="JimDavidson" v-if="isAssistant(el.Author)" alt="JimDavidson">
        <div class="message">{{el.Text}}</div>
      </div>
      <div class="name-time" :style="{alignSelf : !isAssistant(el.Author)?'end':'unset'}">
        <div class="name" v-if="isAssistant(el.Author)">{{getAuthor(el.Author)}}</div>
        <div class="time">{{getTimeText(el.DatePublic)}}</div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.wrapper-message-history{
  display: flex;
  flex-direction: column;
  max-height: 452px;
  gap: 10px;

  .date-time{
    display: flex;
    justify-content: center;
    color: #525252;
    width: 100%;
    padding: 14px 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
  }

  .message-cart{
    display: flex;
    flex-direction: column;

    width: fit-content;
    gap: 8px;
    padding: 0 20px;

    .img-message{
      display: flex;
      gap: 13px;

      img{
        width: 49px;
        height: 49px;
        border-radius: 50%;
      }

      .message{
        background-color: #FFF;
        padding: 16px 22px;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        width: fit-content;
        word-break: break-word;
        border-radius: 12px;
      }
    }

    .name-time{
      display: flex;
      gap: 8px;
      align-items: center;

      .name{
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
      }

      .time{
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
      }
    }
  }
}
</style>