-- Migration script to select a user with the same username or wallet

-- Select a user by username using a parameter
SELECT * FROM public.users WHERE username = $1 OR wallet = #2;