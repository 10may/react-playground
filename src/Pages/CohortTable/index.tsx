import { theme } from '@/theme';
import {
	ColumnDef,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	RowData,
	useReactTable,
} from '@tanstack/react-table';
import { interpolateRgb, piecewise, scaleSequentialLog } from 'd3';
import { useMemo } from 'react';
import styled from 'styled-components';

import { Cohort, data, MONTHS } from './data';

declare module '@tanstack/react-table' {
	interface TableMeta<TData extends RowData> {
		min: number;
		max: number;
	}
}

const interpolator = piecewise(interpolateRgb, [
	// 'hsla(210, 100%, 98%, 1)',
	// 'hsla(206, 100%, 97%, 1)',
	// 'hsla(209, 100%, 91%, 1)',
	// 'hsla(206, 100%, 85%, 1)',
	// 'hsla(206, 100%, 76%, 1)',

	'#EF476F',
	'#F18805 ',
	'#44BBA4 ',

	// 'rgba(251,97,48,1)',
	// 'rgba(255,248,186,1)',
	// 'rgba(87,181,104,1)',

	// 'red',
	// 'yellow',
	// 'green',
]);

const scale = scaleSequentialLog<string>(interpolator);

const formatCurrency = new Intl.NumberFormat('en-us', {
	style: 'currency',
	currency: 'usd',
	currencyDisplay: 'narrowSymbol',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});

const columnHelper = createColumnHelper<Cohort>();

const columns = [
	columnHelper.accessor('first_purchase_month_year', {
		header: () => <Th>Cohort</Th>,
		cell: info => {
			return <Td>{info.getValue()}</Td>;
		},
		footer: () => <Th>Grand Total</Th>,
	}),
	columnHelper.accessor('count', {
		header: () => <Th>Customer Count</Th>,
		cell: info => {
			return <Td style={{ textAlign: 'right' }}>{info.getValue()}</Td>;
		},
		footer: ({ table }) => {
			const val = table
				.getFilteredRowModel()
				.rows.reduce(
					(total, row) => total + row.getValue<number>('count'),
					0,
				);
			return <Th style={{ textAlign: 'right' }}>{val}</Th>;
		},
	}),
	...MONTHS.map((month, i) =>
		columnHelper.accessor(month, {
			header: () => (
				<Th style={{ textAlign: 'right' }}>{`Month ${i}`}</Th>
			),
			cell: info => {
				const val = info.getValue();

				const min = info.table.options.meta?.min || -Infinity;
				const max = info.table.options.meta?.max || Infinity;

				const colorScale = scale.domain([min, max]);
				const bg = colorScale(val);
				return val ? (
					<Td
						style={{
							textAlign: 'center',
							backgroundColor: bg,
							color: getTextColor(bg),
						}}
					>
						{formatCurrency.format(val)}
					</Td>
				) : (
					<Td
						style={{
							backgroundColor: theme.colors.gray100,
							height: 40,
						}}
					/>
				);
			},
			footer: ({ table }) =>
				formatCurrency.format(
					table
						.getFilteredRowModel()
						.rows.reduce(
							(total, row) => total + row.getValue<number>(month),
							0,
						),
				),
		}),
	),
	columnHelper.display({
		id: 'total',
		header: () => <Th style={{ textAlign: 'right' }}>Total</Th>,
		cell: ({ row }) => {
			const data = row.original;
			const val = formatCurrency.format(
				MONTHS.reduce((total, month) => total + data[month], 0),
			);
			return <Th style={{ textAlign: 'right' }}>{val}</Th>;
		},
		footer: ({ table }) => {
			const val = table
				.getFilteredRowModel()
				.rows.reduce((total, row) => {
					const data = row.original;
					return (
						total +
						MONTHS.reduce((total, month) => total + data[month], 0)
					);
				}, 0);
			return (
				<Th style={{ textAlign: 'right' }}>
					{formatCurrency.format(val)}
				</Th>
			);
		},
	}),
];

/**
 *
 * @param data Cohort[]
 * @returns [min, max]
 */
function getDomain(data: Cohort[]): [number, number] {
	let min = Infinity;
	let max = -Infinity;

	data.forEach(d => {
		MONTHS.forEach(m => {
			const v = d[m];
			if (v && min > v) min = v;
			if (max < v) max = v;
		});
	});

	return [min, max];
}

export interface CohortTableProps<T, U = unknown> {
	/**
	 * table rows
	 */
	data: T[];

	/**
	 * table columns made using columnHelper
	 */
	columns: ColumnDef<T, U>[];
}

export function CohortTable<
	T extends Record<string, unknown>,
	U = unknown,
>({}: React.PropsWithChildren<CohortTableProps<T, U>>) {
	const [min, max] = useMemo(() => getDomain(data), [data]);

	const table = useReactTable({
		data: data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		meta: {
			min,
			max,
		},
	});

	return (
		<TableWrapper>
			<table id='cohort_basic_table'>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
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
					{table.getRowModel().rows.map(row => (
						<tr key={row.id}>
							{row.getVisibleCells().map(cell => (
								<td key={cell.id}>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext(),
									)}
								</td>
							))}
						</tr>
					))}
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

export default CohortTable;

const TableWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;

	#cohort_basic_table {
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
