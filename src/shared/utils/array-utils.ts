export const insertToArray = <T> (val: T, arr: T[], index: number) => {
    const newArr = [...arr];

    if (index >= 0 && index <= newArr.length) {
        newArr.splice(index, 0, val);
    } else {
        newArr.push(val);
    }

    return newArr;
};

export const setToArray = <T> (val: T, arr: T[], index: number) => {
    const newArr = [...arr];
    newArr[index] = val;
    return newArr;
}