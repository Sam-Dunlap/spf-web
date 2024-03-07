//re-exports everything from api folder
import getPokemon, {restoreFullName} from "./app/api/getPokemon";
import { allTeams, teamByCoachName, teamByTeamName } from "./app/api/teamFetchFuncs";

export {
    getPokemon,
    allTeams,
    teamByCoachName,
    teamByTeamName,
    restoreFullName
}