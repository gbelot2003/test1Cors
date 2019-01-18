export function group(arr) {
    return arr.reduce((out, order, index) => {
        const key = order.subarea;
        if (!out[key]) {
            out[key] = [];
        };
        out[key].push(order);

        return out;
    }, {});
}

export function addPropToGroup(arr) {
    let obj = {};

    for (let key in arr) {
        obj[key] = {
            active: true,
            icon: "blabcla",
            data: arr[key]
        }
    }
    return obj;
}

