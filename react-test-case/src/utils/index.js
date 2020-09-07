export const get = (name) => JSON.parse(localStorage.getItem(name))
export const set = (name, list) => localStorage.setItem(name, JSON.stringify(list))
export const remove = () => localStorage.clear()