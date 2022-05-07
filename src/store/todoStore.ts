import { supabase } from '../utils/supaBase';
import { writable, type Writable } from 'svelte/store';
import type { Todo } from '../types/todo';

export const todoStore: Writable<Array<Todo>> = writable([]);

export const getTodos = async () => {
	const { data, error } = await supabase.from('todos').select();
	if (error) throw error;

	todoStore.set(data);
};

export const addTodo = async (task: string, user_id: string) => {
	const { data, error } = await supabase.from('todos').insert([{ task, user_id }]);

	if (error) {
		throw error;
	}

	todoStore.update((currState) => [data[0], ...currState]);
};

export const getOneTodo = (id: number) => {
	return todoStore.update((currentState) => currentState.filter((todo) => todo.id === id));
};

export const deletedTodo = async (id: number) => {
	const { error } = await supabase.from('todos').delete().match({ id });
	if (error) throw error;

	todoStore.update((currentState) => currentState.filter((todo) => todo.id !== id));
};

export const toggleComplete = async (id: number, completed: boolean) => {
	const { error } = await supabase.from('todos').update({ completed: !completed }).match({ id });
	if (error) throw error;

	todoStore.update((currState) =>
		currState.map((todos) => {
			if (todos.id === id) {
				todos.completed = !todos.completed;
			}
			return todos;
		})
	);
};
