/**
 * Checks whethere the given entity is undefined or empty string.
 * @param property Property to check
 * @returns boolean
 */
export function isInvalid(property? : any) : boolean {
    return property == undefined || property == '';
}

/**
 * Checks whethere the given entity is undefined, empty list or empty string.
 * @param property Property to check
 * @returns boolean
 */
export function isEmpty(property?: any[] | string) : boolean {
    return property == undefined || !property.length;
}

/**
 * Finds and removes one entity matching the condition from list.
 * @param list Property to alter
 * @param condition condition used to find the element to remove
 */
export function removeFromList(list : any[], condition : (any) => boolean) : void {
    const index = list.findIndex(condition);
    if(index>0)
        list.splice(index,1);
}

/**
 * Finds and removes all entities matching the condition from list.
 * @param list Property to alter.
 * @param condition condition used to find the element to remove
 */
export function removeAllFromList(list : any[], condition : (any) => boolean) : void {
    do{
        const index = list.findIndex(condition);
        if(index>0)
            list.splice(index,1);
        else
            return;
    }while(true);
}

/**
 * Takes string and capitalizes it.
 * @param string String to capitalize
 * @returns Capitalized string
 */
export function capitalize(string :string) : string {
    if(isEmpty(string))
        return '';
    let nameSplit = string.toLowerCase().split(" ");
    return nameSplit.map(word => word.length<=1 ? word.toUpperCase() : word[0].toUpperCase()+word.substring(1,word.length)).join(" ");
}

/**
 * Takes string, trims it and then removes all trailling spaces.
 * @param string String to clean
 * @returns Cleaned string
 */
export function trimTrails(string : string) : string {
    if(isEmpty(string))
        return '';
    return string.replace(/[\s]+/g," ").trim();
}