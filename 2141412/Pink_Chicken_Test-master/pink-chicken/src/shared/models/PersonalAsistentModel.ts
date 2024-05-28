import {FileModel, MessageModel} from "@/shared";

/** Модель персонального ассистента */
export default class PersonalAsistentModel{

    Id!:number;
    /** Имя */
    Name!:string;
    /** Почта */
    Email!:string;
    /** Аватарка (фото профиля) */
    Avatar!:string;
    /** Заказанные отчеты */
    OrderedReport?:Array<FileModel>;
    /** Имя */
    OrderedMediaplan?:Array<FileModel>;
    /** Заказанные отчеты */
    Correspondence?:Array<MessageModel>;

    constructor(obj: Partial<PersonalAsistentModel>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
}