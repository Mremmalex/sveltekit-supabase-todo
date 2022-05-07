import { createClient } from '@supabase/supabase-js';
import { baseKEY, baseURl } from './secret';

export const supabase = createClient(
	baseURl || 'https://otdvkxgejisyamuxejzz.supabase.co',
	baseKEY
);
