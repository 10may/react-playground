import { theme } from '@/theme';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { interpolateRgb, piecewise, scaleSequentialLog } from 'd3';
import { useMemo } from 'react';
import styled from 'styled-components';

import { TieredMonthlyData, TieredWeeklyData } from './data';
import { getTableData, ShareOfVoiceType } from './utils';

type KeysSOV = Exclude<
	keyof ShareOfVoiceType,
	'month_start_date' | 'week_start_date'
>;

type Merged = {
	[value in KeysSOV]: Record<string, string>;
};

type TableData = {
	tier: string;
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
};

const keys: KeysSOV[] = [
	'clicks_share',
	'purchases_brand_count',
	'purchases_total_count',
	'sales_share',
	'search_query_volume',
];

const TITLES = {
	tier: { title: 'Tier', formatter: (v: string) => v },
	clicks_share: { title: 'Click Share', formatter: (v: string) => v },
	purchases_brand_count: {
		title: 'Purchases Brand Count',
		formatter: (v: string) => v,
	},
	purchases_total_count: {
		title: 'Purchases Total Count',
		formatter: (v: string) => v,
	},
	sales_share: { title: 'Sales Share', formatter: (v: string) => v },
	search_query_volume: {
		title: 'Search Query Volume',
		formatter: (v: string) => v,
	},
} as const;

const interpolator = piecewise(interpolateRgb, [
	'#AB74F433',
	'#AB74F480',
	'#AB74F4CC',
]);

const scale = scaleSequentialLog<string>(interpolator);

const columnHelper = createColumnHelper<TableData>();

const columns = [
	// columnHelper.accessor('tier', {
	// 	header: () => <Th style={{ justifyContent: 'flex-start' }}>Tier</Th>,
	// 	cell: info => {
	// 		return (
	// 			<Td style={{ justifyContent: 'flex-start' }}>
	// 				{info.getValue<KeysSOV>()}
	// 			</Td>
	// 		);
	// 	},
	// }),
	columnHelper.accessor('metric', {
		header: () => <Th style={{ justifyContent: 'flex-start' }}>Metric</Th>,
		cell: info => {
			return (
				<Td style={{ justifyContent: 'flex-start' }}>
					{TITLES[info.getValue<KeysSOV>()].title}
				</Td>
			);
		},
	}),
	columnHelper.accessor('week_0', {
		header: () => {
			return <Th>Week 1</Th>;
		},
		cell: info => {
			const { metric, wMax, wMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([wMin, wMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
	columnHelper.accessor('week_0', {
		id: 'week-0',
		header: () => <Th>Week 1</Th>,
		cell: info => {
			const { metric, wMax, wMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([wMin, wMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
	columnHelper.accessor('week_1', {
		id: 'week-1',
		header: () => <Th>Week 2</Th>,
		cell: info => {
			const { metric, wMax, wMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([wMin, wMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
	columnHelper.accessor('week_2', {
		id: 'week-2',
		header: () => <Th>Week 3</Th>,
		cell: info => {
			const { metric, wMax, wMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([wMin, wMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
	columnHelper.accessor('week_3', {
		id: 'week-3',
		header: () => <Th>Week 4</Th>,
		cell: info => {
			const { metric, wMax, wMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([wMin, wMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
	columnHelper.accessor('week_4', {
		id: 'week-4',
		header: () => <Th>Week 5</Th>,
		cell: info => {
			const { metric, wMax, wMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([wMin, wMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),

	columnHelper.accessor('month_0', {
		id: 'month-0',
		header: () => <Th>Month 1</Th>,
		cell: info => {
			const { metric, mMax, mMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([mMin, mMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
	columnHelper.accessor('month_1', {
		id: 'month-1',
		header: () => <Th>Month 2</Th>,
		cell: info => {
			const { metric, mMax, mMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([mMin, mMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
	columnHelper.accessor('month_2', {
		id: 'month-2',
		header: () => <Th>Month 3</Th>,
		cell: info => {
			const { metric, mMax, mMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([mMin, mMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
	columnHelper.accessor('month_3', {
		id: 'month-3',
		header: () => <Th>Month 4</Th>,
		cell: info => {
			const { metric, mMax, mMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([mMin, mMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
	columnHelper.accessor('month_4', {
		id: 'month-4',
		header: () => <Th>Month 5</Th>,
		cell: info => {
			const { metric, mMax, mMin } = info.row.original;
			const val = info.getValue();
			const colorScale = scale.domain([mMin, mMax]);
			const fn = TITLES[metric as keyof typeof TITLES].formatter;
			return (
				<Td
					style={{
						backgroundColor: colorScale(parseInt(val)),
					}}
				>
					{fn(val) || '-'}
				</Td>
			);
		},
	}),
];

export function ShareOfVoice() {
	// const data = getTableData(WEEKLY_TOTALS, WEEKLY_TOTALS);
	const data = useMemo(() => {
		return [
			...getTableData(
				TieredWeeklyData.tier_1,
				TieredMonthlyData.tier_1,
				'tier_1',
			),
			...getTableData(
				TieredWeeklyData.tier_2,
				TieredMonthlyData.tier_2,
				'tier_2',
			),
			...getTableData(
				TieredWeeklyData.tier_3,
				TieredMonthlyData.tier_3,
				'tier_3',
			),
			...getTableData(
				TieredWeeklyData.tier_4,
				TieredMonthlyData.tier_4,
				'tier_4',
			),
		];
		// return getTableData(WEEKLY_TOTALS, MONTHLY_TOTAL);
	}, []);
	console.log(`🚀 ~ data ~ data:`, data);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
	return (
		<TableWrapper>
			<table id='sov_basic_table'>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							<th>Tier</th>
							{headerGroup.headers.map(header => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
										  )}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row, index) => {
						return (
							<tr key={row.id}>
								{(index === 0 || !(index % 5)) && (
									<td
										rowSpan={5}
										style={{
											borderTop: `1px solid ${theme.colors.gray300}`,
										}}
									>
										Tier {row.original.tier.at(-1)}
									</td>
								)}
								{row.getVisibleCells().map(cell => {
									const val = cell.getValue();
									return (
										<td
											key={cell.id}
											style={{
												borderTop:
													index === 0 || !(index % 5)
														? `1px solid ${theme.colors.gray300}`
														: '',
											}}
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					{table.getFooterGroups().map(footerGroup => (
						<tr key={footerGroup.id}>
							{footerGroup.headers.map(header => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.footer,
												header.getContext(),
										  )}
								</th>
							))}
						</tr>
					))}
				</tfoot>
			</table>
		</TableWrapper>
	);
}
// Generated by https://quicktype.io

const TableWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;

	#sov_basic_table {
	}
`;

const Th = styled.div`
	padding: 8px;
	text-align: left;
`;

const Td = styled.div`
	padding: 8px;
	text-align: left;
`;

function getTextColor(rgbString: string) {
	const rgbArray = rgbString.substring(4, rgbString.length - 1).split(',');

	const r = parseInt(rgbArray[0].trim());
	const g = parseInt(rgbArray[1].trim());
	const b = parseInt(rgbArray[2].trim());

	const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);

	// Set the text color based on the brightness value
	if (brightness > 125) {
		// Use black text for light backgrounds
		return '#000000';
	}

	// Use white text for dark backgrounds
	return '#ffffff';
}

// CustomerAnalytics
