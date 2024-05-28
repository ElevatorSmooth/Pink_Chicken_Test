<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {MessageModel, usePersonaAsistentStore} from "@/shared"
import {storeToRefs} from "pinia";
import {Send,Gallery,FolderAdd} from '@/app/assets'

const { addMessage } = usePersonaAsistentStore();
const { getCorrespondence } = storeToRefs(usePersonaAsistentStore());

/** Введенный текст */
const message = ref<MessageModel>(new MessageModel({Id:0}));

/** Возвращает и записывает текст */
const getMessage = computed({
  get:()=>{
    return message.value.Text??"";
  },
  set:(str:string)=>{
    message.value.Text = str;
  }
})

/** Флаг загрузки */
const isLoading = ref(false)

/** Отправка сообщения */
const sendMessage =  async () => {
  isLoading.value=true;
  await addMessage(message.value);
  isLoading.value=false;

  message.value = new MessageModel({Id:0})
}



</script>

<template>
  <div class="wrapper-message-input">
      <textarea  v-model="getMessage"  placeholder="Введите сообщение..." @keydown.enter="sendMessage"/>

    <div class="wrap-button-hint">

      <v-btn
          height="50px"
          width="50px"
          color="#EE26C2"
          icon
          @click="sendMessage"
          :loading="isLoading"
      >
        <img :src="Send" alt="Send" >
      </v-btn>

      <div class="hint">
        Enter
      </div>
    </div>

    <div class="send-files">
      <label>
        <img :src="FolderAdd" alt="FolderAdd">
        <input id="input-folder" type="file" hidden>
      </label>
      <label>
        <img :src="Gallery" alt="Gallery">
        <input id="input-photo" type="file" hidden>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-message-input{
  position: relative;
  background-color: #FFF;
  width: 100%;
  height: 144px;
  border: 2px solid #EE26C2;
  border-radius: 20px;

  .wrap-button-hint{
    display: flex;
    position: absolute;
    bottom:12px;
    right:20px;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    .hint{
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
    }
  }

  .send-files{
    display: flex;
    position: absolute;
    left: 20px;
    bottom: 20px;
    gap: 20px;
    & img {
      cursor: pointer;
    }
  }

  textarea {
    width: 100%;
    height: 144px;
    padding: 20px 25px;
    font-size: 16px;
    border-radius: 20px;
    resize: none;

    &:focus{
      outline: none;
    }
  }
}
</style>