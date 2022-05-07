<script lang="ts">
	import { goto } from '$app/navigation';

	import { userAuth } from '../store/sessionStore';
	import { supabase } from '../utils/supaBase';

	const handleLogout = () => {
		supabase.auth.signOut();
		goto('/');
	};
</script>

<header class="h-[3em] shadow-md ">
	<div class="container w-[90%] mx-9">
		<div class="flex justify-between text-center">
			<a href="/" class="text-bold text-xl text-center mt-2">Your Todo</a>
			{#if $userAuth}
				<button class="btn-success py-2 px-4 shadow-sm rounded-lg mt-1" on:click={handleLogout}
					>logout</button
				>
			{/if}
		</div>
	</div>
</header>
