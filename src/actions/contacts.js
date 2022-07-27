const create = (payload) => {
    console.log(payload);
}

const read = (uid = false) => {
    console.log(uid);
}

const update = (uid, payload) => {
    console.log(payload);
}

const remove = (uid) => {
    console.log(uid);
}

export { create, read, update, remove }