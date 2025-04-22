import { getAllDrafts } from "../api/draftFetchFuncs"

export default async function DraftList() {
    const drafts = (await getAllDrafts()).unwrap();
    return (
        <h1>{drafts[0].name}</h1>
    )
}