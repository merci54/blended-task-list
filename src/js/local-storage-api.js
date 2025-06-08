export function setDataLs(key, value) {
    const normalizeValue = JSON.stringify(value);
    localStorage.setItem(key, normalizeValue);
}

export function getDataLs(key) {
    return JSON.parse(localStorage.getItem(key))
}

export const LS_KEY_TASKS = "tasksList";
export const LS_KEY_THEME = "pageTheme";