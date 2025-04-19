import { DatabaseError } from "./err";
import Team from "./team";

export enum DraftStatus {
	Pending,
	Active,
	Paused,
	Finished,
	Archived
}
