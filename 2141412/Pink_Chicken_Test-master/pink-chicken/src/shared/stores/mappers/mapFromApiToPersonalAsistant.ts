import {PersonalAsistentModel} from "@/shared";
import {JimDavidson} from "@/app/assets"

/** В данном случае маппер генерирует новые файлы по запросу */
const  mapFromApiToPersonalAsistant = (lastId:number):PersonalAsistentModel => {
    return new PersonalAsistentModel({
        Id:1+lastId,
        Name:"Jim Davidson",
        Email:`Jim Davidson${1+lastId}@adaurum.ru`,
        Avatar:JimDavidson,
    })
}
export {mapFromApiToPersonalAsistant};