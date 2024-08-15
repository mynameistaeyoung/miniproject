import { create } from 'zustand'

interface Todo {
    text: string;
    completed: boolean;
    id: number;
}

interface BearsStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number) => void;
}

export const useTodoStore = create<BearsStore>((set) => ({
    todos: [],
    addTodo: (text) =>
        set((state) => ({
            todos: [...state.todos, { text, completed: false, id: Date.now() }],
        })),
    deleteTodo: (id) =>
        set(state => ({ todos: state.todos.filter(item => item.id !== id) })),
    editTodo: (id) =>
        set(state => ({
            todos: state.todos.map(item =>
                item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
            )
        }))
}));

