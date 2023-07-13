import { extent } from 'd3';

export type ShareOfVoiceType = {
	tier?: string;
	clicks_share: string;
	month_start_date: string;
	purchases_brand_count: string;
	purchases_total_count: string;
	sales_share: string;
	search_query_volume: string;
	week_start_date: string;
};

export type TieredData = {
	tier_1: ShareOfVoiceType[];
	tier_2: ShareOfVoiceType[];
	tier_3: ShareOfVoiceType[];
	tier_4: ShareOfVoiceType[];
};

export type KeysSOV = Exclude<
	keyof ShareOfVoiceType,
	'month_start_date' | 'week_start_date'
>;

export type Merged = {
	[value in KeysSOV]: Record<string, string>;
};

export type TableData = {
	metric: string;
	week_0: string;
	week_1: string;
	week_2: string;
	week_3: string;
	week_4: string;
	month_0: string;
	month_1: string;
	month_2: string;
	month_3: string;
	month_4: string;
	wMin: number;
	wMax: number;
	mMin: number;
	mMax: number;
	tier: string;
};

export const keys: KeysSOV[] = [
	// 'tier',
	'clicks_share',
	'sales_share',
	'search_query_volume',
	'purchases_brand_count',
	'purchases_total_count',
];

export function getTableData(
	weeklyValues: ShareOfVoiceType[],
	monthlyValues: ShareOfVoiceType[],
	tier?: string,
) {
	const weeklyOutput = weeklyValues.reduce<Partial<Merged>>(
		(acc, curr, i) => {
			keys.forEach(metric => {
				const x = (acc[metric] = acc[metric] ?? {});
				x[`week_${i}`] = curr[metric] ?? '';
			});
			return acc;
		},
		{},
	);

	// console.log(`🚀 ~ weeklyOutput ~ weeklyOutput:`, weeklyOutput);

	const monthlyOutput = monthlyValues.reduce<Partial<Merged>>(
		(acc, curr, i) => {
			keys.forEach(metric => {
				const x = (acc[metric] = acc[metric] ?? {});
				x[`month_${i}`] = curr[metric] ?? '';
			});
			return acc;
		},
		{},
	);

	// console.log(`🚀 ~ monthlyOutput ~ monthlyOutput:`, monthlyOutput);

	const mergedData = keys.flatMap(metric => {
		if (!weeklyOutput[metric] && !monthlyOutput[metric]) return [];

		const [wMin = -Infinity, wMax = Infinity] = extent(
			Object.values(weeklyOutput[metric] ?? {}),
		);

		const [mMin = -Infinity, mMax = Infinity] = extent(
			Object.values(monthlyOutput[metric] ?? {}),
		);

		// console.log(`🚀 ~ mergedData ~ w:`, w);
		return {
			metric,
			...weeklyOutput[metric],
			...monthlyOutput[metric],
			wMin,
			wMax,
			mMin,
			mMax,
			tier,
		};
	}) as TableData[];

	// console.log(`🚀 ~ mergedData ~ mergedData:`, mergedData);

	return mergedData;
}
