//re-exports everything from api folder
import getPokemon, { restoreFullName } from "./app/api/getPokemon";
import {
	fetchAllTeams,
	fetchTeamsByCoachName,
	fetchTeamByID,
	fetchTeamsByDraftID
} from "./app/api/teamFetchFuncs";

export {
	getPokemon,
	fetchAllTeams,
	fetchTeamsByCoachName,
	fetchTeamByID,
	restoreFullName,
	fetchTeamsByDraftID
};
