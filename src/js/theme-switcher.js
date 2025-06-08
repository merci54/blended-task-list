import { refs } from "./refs";
import { setDataLs, getDataLs, LS_KEY_THEME } from "./local-storage-api";

export function switchTheme() {
    if (refs.body.classList.contains('theme-dark')) {
        refs.body.classList.replace('theme-dark', 'theme-light');
        setDataLs(LS_KEY_THEME, 'theme-light')
    } else {
        refs.body.classList.replace('theme-light', 'theme-dark');
        setDataLs(LS_KEY_THEME, 'theme-dark')
    }

}

export function renderTheme() {
    const dataLs = getDataLs(LS_KEY_THEME);
    if (dataLs === "theme-light") {
        refs.body.classList.replace('theme-dark', dataLs);
    }

}