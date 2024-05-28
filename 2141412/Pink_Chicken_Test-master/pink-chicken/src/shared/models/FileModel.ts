import {FileTypeEnum} from "@/shared";

export default class FileModel{

    Id!:number;
    Name!:string;
    AllCount!:number;
    CountSucsess!:number;
    TypeFile!: FileTypeEnum;
    Status!:string;
    StatusImage!:string;
    Action!:string;
    ActionColor!:string;
    TypeIcon!:string;

    constructor(obj: Partial<FileModel>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
}