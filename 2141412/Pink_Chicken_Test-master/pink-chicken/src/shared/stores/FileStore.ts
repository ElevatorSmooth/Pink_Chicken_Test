import {defineStore} from "pinia";
import {FileModel, FileTypeEnum, mapFromApiToFileModel} from "@/shared";
import {computed, ref} from "vue";

export const useFileStore = defineStore('file-store', ()=>{

    /** Массив сех медиапланов иотчетов */
    const allFiles = ref(new Array<FileModel>());

    /** Возвращает все файлы при обновлении массива */
    const getAllFiles = computed(()=>{
        return allFiles.value;
    })

    /** Симуляция запроса */
    const simulateAsyncRequest = (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // if (true) {
                    resolve(true);
                // }
                // else {
                //     reject(false);
                // }
            }, 2000); // 2 секунды задержки
        });
    }

    /** Полйчение файлов (в идеалье полноценный пагинатор, но для макета сойдет) */
    const initFiles = async (count = 5,type = FileTypeEnum.Mediaplan)=>{
        await simulateAsyncRequest().then(()=>{
            const lastId =
                allFiles.value && allFiles.value?.length ?allFiles.value[allFiles.value.length-1].Id:0;
            allFiles.value.push(...mapFromApiToFileModel(lastId, count, type));
        })
    }

    /** Выполнение действия над файлом */
    const actionWithFiles = async (id:number,action:string)=>{
        await simulateAsyncRequest().then(()=>{
            console.log(`Выполненно: ${action} над файлом с Id ${id}`);
        }).catch(error=>{
            console.error(error);
        })
    }

    return{
        getAllFiles,
        initFiles,
        actionWithFiles,
    }
})