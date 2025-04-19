import Team from "@/types/team";
import sql from "./db";
import { Err, Ok, Result } from "ts-results";
import { DraftStatus } from "@/types";
import { DatabaseError } from "@/types/err";

export async function fetchTeamsByDraftID(id: string): Promise<Team[]> {
	const res = (await sql`select * from teams where draft=${id}`) as unknown;
	return res as Team[];
}

export async function fetchAllTeams(): Promise<Team[]> {
	const res = (await sql`select * from teams`) as unknown;
	return res as Team[];
}

export async function fetchTeamsByCoachName(
	name: string
): Promise<Result<Team[], DatabaseError>> {
	let res =
		(await sql`select * from teams where status != ${DraftStatus.Archived} and coach_name = ${name}`) as Array<Team>;
	if (res.length == 0) {
		return new Err(DatabaseError.QueryReturnedNoResultsError);
	} else {
		return Ok(res);
	}
}

export async function fetchTeamByID(
	team_id: string
): Promise<Result<Team, DatabaseError>> {
	let res =
		(await sql`select * from teams where uuid = ${team_id}`) as Array<Team>;
	if (res.length == 0) {
		return Err(DatabaseError.QueryReturnedNoResultsError);
	} else {
		return Ok(res[0]);
	}
}
