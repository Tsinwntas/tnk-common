export function isInvalid(property: any){
    return property == undefined || property == '';
}

export function isArrayEmpty(property: any[]){
    return property == undefined || !property.length;
}

export function removeFromList(list : any[], condition : (any) => boolean) : void {
    const index = list.findIndex(condition);
    if(index>0)
        list.splice(index,1);
}

export function fixDisplay(item : string): string {
    return capitalize(item.replace(/-/g, " "));
}

export function capitalize(string :string) : string {
    if(!string || string.length==0)
        return '';
    let nameSplit = string.toLowerCase().trim().split(" ");
    return nameSplit.map(word => word.length==1 ? word.toUpperCase() : word[0].toUpperCase()+word.substring(1,word.length)).join(" ");
}