-- Migration script to insert a new user

-- Insert a new user
INSERT INTO public.users (username, wallet) 
VALUES ($1, $2);