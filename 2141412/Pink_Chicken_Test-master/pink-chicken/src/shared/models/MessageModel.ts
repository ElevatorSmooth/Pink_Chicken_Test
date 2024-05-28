export default class MessageModel{

    Id!:number;
    DatePublic!:number;
    Text?:string;
    Image?:string;
    File?:string;
    /** 0 - мы, 1 - ассистент */
    Author!:number;

    constructor(obj: Partial<MessageModel>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
}