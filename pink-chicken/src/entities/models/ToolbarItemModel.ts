export default class ToolbarItemModel{
    Id!:number;
    Icon:string|undefined;
    Text:string|undefined;
    ColorButton:string|undefined;
    WidthText:string|undefined;
    TextColor:string|undefined;
    TextColorAfter680:string|undefined;
    isHideButtonAter630:boolean|undefined;
    GapBetween:string|undefined;

    constructor(obj?: Partial<ToolbarItemModel>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
}