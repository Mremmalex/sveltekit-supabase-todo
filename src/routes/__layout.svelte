<script>
	import '../app.css';
	import { userAuth } from '../store/sessionStore';
	import { supabase } from '../utils/supaBase';
	import { getTodos } from '../store/todoStore';
	import Navbar from '$lib/Navbar.svelte';

	userAuth.set(supabase.auth.user());
	supabase.auth.onAuthStateChange((_, session) => {
		userAuth.set(session?.user);
		if (session?.user) {
			getTodos();
		}
	});
</script>

<svelte:head>
	<title>Your Todo</title>
</svelte:head>

<Navbar />
<slot />
