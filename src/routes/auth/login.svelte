<script lang="ts">
	import { goto } from '$app/navigation';
	import Alert from '$lib/Alert.svelte';

	import { userAuth } from '../..//store/sessionStore';
	import { getTodos } from '../../store/todoStore';
	import { supabase } from '../../utils/supaBase';

	let email: string = '';
	let password: string = '';
	let errorMessage: string | unknown;
	let successMessage: string | unknown;

	async function handleLogin() {
		if (email.trim().length! < 6 && password.trim().length < 6) {
			errorMessage = ' invalid auth formart';
		} else {
			const { session, error } = await supabase.auth.signIn({
				email,
				password
			});
			if (error) errorMessage = error.message;

			userAuth.set(session?.user);
			if (session?.user) {
				successMessage = 'please confirm your Email';
				goto('/auth/todos');
			}
			email = '';
			password = '';
		}
	}
</script>

<div class="container mx-auto w-[40%] mt-[10em]">
	{#if errorMessage}
		<Alert alertType="alert-error" message={errorMessage} />
	{/if}
	{#if successMessage}
		<Alert message={successMessage} />
	{/if}
	<form on:submit|preventDefault={handleLogin}>
		<div class="container mx-auto w-[100%]">
			<div class="form-control w-full mx-w-xs">
				<label for="email">email</label>
				<input
					bind:value={email}
					type="email"
					id="password"
					placeholder="your email"
					class="input input-bordered w-full mx-x-xs"
				/>
			</div>
			<div class="form-control">
				<label for="password">username</label>
				<input
					bind:value={password}
					type="password"
					placeholder="your password"
					id="password"
					class="input input-bordered w-full mx-x-xs"
				/>
			</div>
			<div class="form-control mt-[2em]">
				<button type="submit" class="btn btn-secondary">Sign Up</button>
			</div>
		</div>
	</form>
</div>

<style>
</style>
