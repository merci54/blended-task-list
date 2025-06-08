import { getDataLs, LS_KEY_TASKS } from "./local-storage-api";

export function renderMarkup() {
    const renderList = getDataLs(LS_KEY_TASKS) || [];

    return renderList.map(({ title, description }) =>
        `<li class="task-list-item">
              <button class="task-list-item-btn">Delete</button>
              <h3>${title}</h3>
              <p>${description}</p>
            </li>`
    ).join("")

}
