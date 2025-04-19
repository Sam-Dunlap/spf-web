import {TeamPreview, TeamPreviewLoading} from "../components/teampreview";
import {Suspense} from 'react';
import { fetchAllTeams } from "@/api";



export default async function TeamList() {
    let teams = await fetchAllTeams();
    teams.sort((a, b) => (b.wins - b.losses) - (a.wins - a.losses))
    const previews = teams.map(team => <li className="pb-2" key={team.uuid}><Suspense fallback={<TeamPreviewLoading />}><TeamPreview>{team}</TeamPreview></Suspense></li>);
    return (
            <ul className="mt-4 ml-4 col-start-1 col-span-9">
                {previews}
            </ul>
    )
}