<script lang="ts">
	import { userAuth } from '../store/sessionStore';
	import { goto } from '$app/navigation';
	import { supabase } from '../utils/supaBase';
	import { getTodos } from '../store/todoStore';
	import { browser } from '$app/env';

	const handleGoogleAuth = async () => {
		const { session, error } = await supabase.auth.signIn({
			provider: 'google'
		});

		if (error) throw error;
		userAuth.set(session?.user);
		if (session?.user) {
			getTodos();
		}
	};
	if ($userAuth) {
		if (browser) {
			goto('/auth/todos');
		}
	}
</script>

<div class="container mx-auto w-[50%] align-middle justify-center mt-[10em]">
	<div class="container w-[100%]">
		<button on:click={handleGoogleAuth} class="btn btn-accent btn-outline w-full mt-[1em]">
			Google
		</button>
		<a href="/auth/login" class="btn btn-outline btn-primary w-full mt-[1em]"> Login </a>
		<a href="/auth/signup" class="btn btn-primary w-full mt-[1em]"> SignUp </a>
	</div>
</div>
