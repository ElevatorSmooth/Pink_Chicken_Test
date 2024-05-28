import {FileModel, FileTypeEnum} from "@/shared";
import {GreenTick, Subtract, ArrowDown, Refresh,XmlIcon} from "@/app/assets"

/** В данном случае маппер генерирует новые файлы по запросу */
const  mapFromApiToFileModel = (
    value=0,
    count=1,
    type = FileTypeEnum.Mediaplan
):Array<FileModel> => {
    let image="";
    let status="";
    let action="";
    let actionColor="";

    // TODO: локализация
    if(value%2==0) {
        image = GreenTick;
        action = ArrowDown;
        actionColor = "#F4D4ED";
        status = type === FileTypeEnum.Mediaplan
            ? "Медиаплан от 1.06.22 готов"
            : "Отчет от 1.06.22 готов";

    }
    else {
        image = Subtract;
        action = Refresh;
        actionColor = "#949494";
        status = type === FileTypeEnum.Mediaplan
            ? "Медиаплан в процессе составления"
            : "Отчет формируется";
    }

    return [...Array(count)].map((x,indx)=>new FileModel({
        Id:value +indx+1,
        Name:"Companyname",
        TypeFile:type,
        AllCount:23,
        CountSucsess:11,
        StatusImage:image,
        Status: status,
        Action:action,
        ActionColor:actionColor,
        TypeIcon:XmlIcon,
    }));
}
export {mapFromApiToFileModel};