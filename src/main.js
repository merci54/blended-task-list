import { refs } from "./js/refs";
import { handleSubmit, handleDeleteClick } from "./js/tasks";
import { renderMarkup } from "./js/render-tasks";
import { switchTheme, renderTheme } from "./js/theme-switcher";


refs.body.addEventListener("DOMContentLoaded", renderTheme());
refs.list.insertAdjacentHTML("afterbegin", renderMarkup());
refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleDeleteClick);
refs.switch.addEventListener('click', switchTheme)


