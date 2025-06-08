import { refs } from "./refs";
import { setDataLs, getDataLs, LS_KEY_TASKS } from "./local-storage-api";
import { createMarkup } from "./markup-tasks";

export const handleSubmit = e => {
    e.preventDefault();
    const data = {
        title: e.target.elements.taskName.value,
        description: e.target.elements.taskDescription.value
    }

    if (data.title === '' || data.description === '') {
        alert('Enter title and description please!');
        return
    }

    refs.list.insertAdjacentHTML('beforeend', createMarkup(data.title, data.description));

    const tasks = getDataLs(LS_KEY_TASKS) || [];

    if (Array.isArray(tasks)) {
        tasks.push(data)
    }

    setDataLs(LS_KEY_TASKS, tasks);

    e.target.elements.taskName.value = "";
    e.target.elements.taskDescription.value = "";
}

export function handleDeleteClick(e) {
    if (e.target.tagName !== 'BUTTON') return;

    const currentItem = e.target.closest('.task-list-item');
    currentItem.remove();

    const currentItemTitle = currentItem.children[1].innerText;
    const tasks = getDataLs(LS_KEY_TASKS);
    const filteredTasks = tasks.filter(({ title }) => title !== currentItemTitle);
    setDataLs(LS_KEY_TASKS, filteredTasks);


}