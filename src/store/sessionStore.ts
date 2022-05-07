import { writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';

export const userAuth: any | User = writable(false);
