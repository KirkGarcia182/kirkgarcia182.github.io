// check variable types
const undf = a => typeof a==='undefined'
//const nan = a => Number.isNaN(a)
const str = a => typeof a==='string' || a instanceof String
const num = a => typeof a==='number' && isFinite(a)
const tnum = a => !isNaN(a) && isFinite(a)
const arr = a => Array.isArray(a)
const func = a => typeof a==='function'
const obj = a => a && typeof a==='object' && a.constructor === Object
const map = a => a instanceof Map
const set = a => a instanceof Set
const htmlE = a => a instanceof HTMLElement


export {
    undf,
    undf as Undefined,
    undf as isUndefined,
    str,
    str as String,
    str as isString,
    num,
    num as Number,
    num as isNumber,
    tnum,
    arr,
    arr as Array,
    arr as isArray,
    map,
    map as Map,
    map as isMap,
    set,
    set as Set,
    set as isSet,
    func,
    func as Function,
    func as isFunction,
    obj,
    obj as Object,
    obj as isObject,
    htmlE,
    htmlE as HTMLElement,
    htmlE as isHTMLElement,
}