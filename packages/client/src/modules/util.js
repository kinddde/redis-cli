export function decode(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
}

export function encode(data) {
    return JSON.stringify(data);
}
