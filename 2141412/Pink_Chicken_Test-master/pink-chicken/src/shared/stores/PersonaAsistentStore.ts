import {defineStore} from "pinia"
import {computed, reactive, ref} from "vue";
import {MessageModel, PersonalAsistentModel} from "@/shared";
import {mapFromApiToPersonalAsistant} from "@/shared/stores/mappers";

export const usePersonaAsistentStore =defineStore('personal-asistent',()=>{

    /**Все персональные асистенты*/
    const personalAssistants = reactive(new Array<PersonalAsistentModel>());

    /** Возвращает всех персональных асистентов */
    const getPersonalAssistants = computed(():Array<PersonalAsistentModel>|undefined=>{
        return personalAssistants;
    })

    /** Возвращает последнего персонального асистента */
    const getLastPersonalAssistant = computed(():PersonalAsistentModel|undefined=>{
        return personalAssistants && personalAssistants.length ? personalAssistants[personalAssistants.length-1]:undefined;
    })

    /** Возвращает последнего персонального асистента */
    const getCorrespondence = computed(():Array<MessageModel>|undefined=>{
        return getLastPersonalAssistant.value?.Correspondence;
    })

    /** Симуляция запроса */
    const simulateAsyncRequest = (value = 2000): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // if (true) {
                resolve(true);
                // }
                // else {
                //     reject(false);
                // }
            }, value); // 2 секунды задержки
        });
    }


    /** Получение нового асистента */
    const initAssistant = async ()=>{
        await simulateAsyncRequest().then(()=>{
            // if(!personalAssistants) personalAssistants = new Array<PersonalAsistentModel>()
            personalAssistants.push(mapFromApiToPersonalAsistant(getLastPersonalAssistant.value?.Id??0))
        }).catch(error=>{
            console.error(error)
        })
    }

    /** Добавление сообщения */
    const addMessage = async (mess:MessageModel)=>{
        await simulateAsyncRequest(500).then(()=>{
            if(getLastPersonalAssistant.value){
                if(!getLastPersonalAssistant.value.Correspondence)getLastPersonalAssistant.value.Correspondence = new Array<MessageModel>()
                if(getLastPersonalAssistant.value.Correspondence.length) mess.Id = getLastPersonalAssistant.value.Correspondence[getLastPersonalAssistant.value.Correspondence.length-1].Id+1;
                //** 0 - мы, 1 - ассистент */
                mess.Author = mess.Id%2==0?0:1;
                getLastPersonalAssistant.value.Correspondence.push(mess);
            }
        }).catch(error=>{
            console.error(error)
        })
    }

    return{
        getCorrespondence,
        getPersonalAssistants,
        getLastPersonalAssistant,
        initAssistant,
        addMessage,
    }
})