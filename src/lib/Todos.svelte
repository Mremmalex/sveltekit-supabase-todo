<script lang="ts">
	import { deletedTodo, toggleComplete } from '../store/todoStore';
	import type { Todo } from '../types/todo';

	export let todos: Todo;
	let checked: boolean = todos.completed;

	const handleDeleteTodo = (id: number) => {
		deletedTodo(id);
	};

	const handleToggle = (id: number) => {
		toggleComplete(id, checked);
	};
</script>

<div class="container mx-auto mt-[1em]">
	<div class="card w-full bg-base-100 shadow-xl">
		<div class="card-body">
			<div class="card-actions justify-end ">
				<button class="btn btn-error btn-square btn-sm" on:click={() => handleDeleteTodo(todos.id)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill=""
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/></svg
					>
				</button>
			</div>
			<div class="flex flex-row gap-4">
				<input
					on:change={() => handleToggle(todos.id)}
					type="checkbox"
					class="toggle toggle-accent"
					bind:checked
				/>
				<p class={todos.completed ? 'line-through' : ''}>{todos.task}</p>
			</div>
		</div>
	</div>
</div>
