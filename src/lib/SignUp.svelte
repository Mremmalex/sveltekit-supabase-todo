<script lang="ts">
	import { userAuth } from '../store/sessionStore';
	import { getTodos } from '../store/todoStore';
	import { supabase } from '../utils/supaBase';

	let email: string = '';
	let password: string = '';
	let errorMessage: string | unknown;
	let successMessage: string | unknown;

	async function handleSignup() {
		if (email.trim().length! < 6 && password.trim().length < 6) {
			errorMessage = ' invalid auth formart';
		} else {
			const { session, error } = await supabase.auth.signUp({
				email,
				password
			});
			if (error) throw error;

			userAuth.set(session?.user);
			if (session?.user) {
				getTodos();
			}
			successMessage = 'please confirm your Email';
			email = '';
			password = '';
		}
	}
</script>

<div class="container mx-auto w-[80%] md:w-[40%] mt-[10em]">
	{#if errorMessage}
		<h4>{errorMessage}</h4>
	{/if}
	{#if successMessage}
		<h4>{successMessage}</h4>
	{/if}
	<form on:submit|preventDefault={handleSignup}>
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
					placeholder="yout password"
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
