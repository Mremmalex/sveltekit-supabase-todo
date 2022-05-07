<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import AddTodo from '$lib/addTodo.svelte';
	import Todos from '$lib/Todos.svelte';
	import { getTodos, todoStore } from '../../../store/todoStore';
	import { userAuth } from '../../../store/sessionStore';
	import { browser } from '$app/env';
	let loading: boolean = true;
	onMount(() => {
		getTodos();
		loading = false;
	});
	if (!$userAuth) {
		if (browser) {
			goto('/');
		}
	}
</script>

<div class="container mx-auto w-[40%] mt-[2em]">
	<AddTodo />
	{#if loading}
		<h3>Loading Todos.</h3>
	{/if}
	{#each $todoStore as todos (todos.id)}
		<Todos {todos} />
	{/each}
</div>
