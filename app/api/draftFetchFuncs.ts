import { Draft } from "@/types/draft";
import { DatabaseError } from "@/types/err";
import { Err, Ok, Result } from "ts-results";
import sql from "./db";

export async function getDraftByID(
	uuid: string
): Promise<Result<Draft, DatabaseError>> {
	try {
		const res = await sql`select * from drafts where uuid=${uuid}`;
		if (res.length != 1) {
			return Err(DatabaseError.QueryReturnedNoResultsError);
		}
		return Ok(res[0] as Draft);
	} catch (error) {
		console.error(error);
		return Err(DatabaseError.UnknownPGSQLError);
	}
}

export async function getAllDrafts(): Promise<Result<Draft[], DatabaseError>> {
	try {
		const res = await sql`select * from drafts`;
		const drafts = res.map(d => d as Draft);
		return Ok(drafts);
	} catch (error) {
		console.error(error);
		return Err(DatabaseError.DatabaseUnreachableError);
	}
}
