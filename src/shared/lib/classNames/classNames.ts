type Mods = Record<string , boolean | string >



export function classNames (cls: string , mods:Mods ={}, additions:string[] =[] ):string {

    return [
        cls,
        ...additions.filter(Boolean),
        ...Object.entries(mods).filter( ([cls , value]) => Boolean(value))
        .map(([cls , value]) => cls)
    ].join(" ");
}