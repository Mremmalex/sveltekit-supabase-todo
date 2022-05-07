<script lang="ts">
	import { userAuth } from '../store/sessionStore';
	import { addTodo } from '../store/todoStore';

	let todo: string = '';
	let errorMessage: string;

	async function submitTodo() {
		if (todo.trim().length >= 10) {
			await addTodo(todo.trim(), $userAuth.id);
			todo = '';
		} else {
			errorMessage = 'you cant post such task';
		}
	}
</script>

<div class="container mx-auto w-[100%] mt-[4em]">
	<h2 class="font-bold text-3xl">Make A Todo</h2>
	<form on:submit|preventDefault={submitTodo}>
		{#if errorMessage}
			<h4>{errorMessage}</h4>
		{/if}
		<div class="form-control ">
			<label for="todo" class="label">todo</label>
			<textarea
				bind:value={todo}
				type="text"
				id="todo"
				class="textarea textarea-bordered w-full max-x-xs"
				placeholder="Your Todo"
			/>
		</div>
		<div class="form-control mt-[1em] mb-[2em]">
			<button type="submit" class="btn btn-outline btn-success ">Add Todo</button>
		</div>
	</form>
</div>
