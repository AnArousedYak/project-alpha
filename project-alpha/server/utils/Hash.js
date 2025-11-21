import bcrypt from 'bcrypt';

export const hashPassword = (password) => bcrypt.hash(password, 10);

export const verifyPassword = (raw, hashed) => bcrypt.compare(raw, hashed);