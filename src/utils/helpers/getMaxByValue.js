import maxBy from "lodash/maxBy";
import isFunction from "lodash/isFunction";
import property from "lodash/property";

export default (array, key) => {
    const fn = isFunction(key) ? key : property(key);
    return fn(maxBy(array, fn))
    // console.log('max-value', maxBy(array, (obj) => {
    //     return obj[key].match(/[^\d]/gi) ? parseFloat(obj[key]) : parseInt(obj[key]);
    // }));
}