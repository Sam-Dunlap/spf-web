export enum DraftStatus {
	Pending,
	Active,
	Paused,
	Finished,
	Archived
}

export type Draft = {
	name: string;
	uuid: string;
	guild: string;
	players: [];
	pick: number;
	teamsize: number;
	tiers: boolean;
	tier_list: number | undefined;
	tier_budget: number | undefined;
	point_list: number | undefined;
	point_budget: number | undefined;
	status: DraftStatus;
};
