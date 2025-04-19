import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD } = process.env;

if (!DB_USER || !DB_PASSWORD) {
	throw new Error("Missing Environment Variables");
}

export const config = {
	DB_USER,
	DB_PASSWORD
};
