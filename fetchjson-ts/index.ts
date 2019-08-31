import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const todo: Todo = res.data;

    const { id, title, completed } = todo;

    consoleResponse(id, title, completed);
});

function consoleResponse(id: number, title: string, completed: boolean) {
    console.log(`
    The TODO with id ${id};
    Has a title of '${title}';
    Is is completed? ${completed}
  `);
}
