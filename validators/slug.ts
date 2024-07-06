export const slugify = (...items:string[]):string => {
    let toret = "";
    for (const item of items) {
        toret + (toret?"":"-") + item.replace(/ /g,"_").replace(/-/g, "~");
    }
    return toret;
}