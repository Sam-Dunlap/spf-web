import Team from "@/types/team"
import { dbTeams } from "@/mockdb"

export function allTeams(): Team[] {
    const teams: Team[] = dbTeams
    return teams
}

export function teamByTeamName(query: string): Team | undefined {
    const teams = dbTeams;
    return teams.find(t => t.team_name === decodeURI(query));
}

export function teamByCoachName(query: string): Team | undefined {
    const teams = dbTeams;
    return teams.find(t => t.coach === query);
}