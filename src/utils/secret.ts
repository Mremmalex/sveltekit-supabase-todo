const baseURl =
	process.env['VITE_PUBLIC_SUPABASE_URL '] || import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const baseKEY =
	process.env['VITE_PUBLIC_SUPABASE_KEY '] || import.meta.env.VITE_PUBLIC_SUPABASE_KEY;

export { baseURl, baseKEY };
