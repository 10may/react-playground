import {
	createColumnHelper,
	ExpandedState,
	flexRender,
	getCoreRowModel,
	getExpandedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useMemo, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { makeExpandableTableData } from './data';
import { Category } from './type';

const columnHelper = createColumnHelper<Category>();

export const ExpandableTable = () => {
	const tableContainerRef = useRef<HTMLDivElement>(null);
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('na', {
				size: 500,
				header: ({ table }) => (
					<div
						style={{
							display: 'flex',
							gap: '10px',
							justifyContent: 'flex-start',
						}}
					>
						<button
							{...{
								onClick:
									table.getToggleAllRowsExpandedHandler(),
								style: {
									cursor: 'pointer',
								},
							}}
						>
							{table.getIsAllRowsExpanded() ? '▼' : '►'} Category
							Name
						</button>
					</div>
				),
				cell: ({ row, getValue }) => (
					<div
						style={{
							// Since rows are flattened by default,
							// we can use the row.depth property
							// and paddingLeft to visually indicate the depth
							// of the row
							paddingLeft: `${row.depth * 25}px`,
							display: 'flex',
							justifyContent: 'flex-start',
						}}
					>
						<>
							{row.getCanExpand() ? (
								<button
									{...{
										onClick: row.getToggleExpandedHandler(),
										style: { cursor: 'pointer' },
									}}
								>
									<span style={{ marginRight: 10 }}>
										{row.getIsExpanded() ? '▼' : '►'}
									</span>
									{getValue()}
								</button>
							) : (
								<span>⊳ {getValue()}</span>
							)}
						</>
					</div>
				),
			}),

			columnHelper.display({
				id: 'suggested-big',
				header: () => {
					return (
						<div
							style={{
								display: 'flex',
								gap: '10px',
								justifyContent: 'flex-start',
							}}
						>
							Suggested Bid
						</div>
					);
				},
				cell: () => {
					return (
						<div
							style={{
								display: 'flex',
								gap: '10px',
								justifyContent: 'flex-start',
							}}
						>
							<button style={{ cursor: 'pointer' }}>
								Git bids
							</button>
						</div>
					);
				},
			}),

			columnHelper.display({
				id: 'actions',
				header: () => {
					return (
						<div
							style={{
								display: 'flex',
								gap: '10px',
								justifyContent: 'flex-start',
							}}
						>
							Actions
						</div>
					);
				},
				cell: () => {
					return (
						<div
							style={{
								display: 'flex',
								gap: '10px',
							}}
						>
							<button>Add</button>
							<button>Refine</button>
						</div>
					);
				},
			}),
		];
		// as ColumnDef<Category, string>[];
	}, []);

	const [data] = useState(() => makeExpandableTableData(100, 5, 3, 2));

	const [expanded, setExpanded] = useState<ExpandedState>({});

	const table = useReactTable({
		data,
		columns,
		state: {
			expanded,
		},
		onExpandedChange: setExpanded,
		getSubRows: row => row.ch,
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
		debugTable: true,
	});

	const { rows } = table.getRowModel();

	const rowVirtualizer = useVirtualizer({
		// count: flatRows.length,
		count: table.getExpandedRowModel().rows.length,
		getScrollElement: () => tableContainerRef.current,
		estimateSize: () => 20,
		overscan: 5,
	});

	const virtualRows = rowVirtualizer.getVirtualItems();
	const totalSize = rowVirtualizer.getTotalSize();

	const paddingTop =
		virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
	const paddingBottom =
		virtualRows.length > 0
			? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
			: 0;

	return (
		<TableContainer ref={tableContainerRef}>
			<table>
				<thead
					style={{
						width: table.getCenterTotalSize(),
					}}
				>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return (
									<th
										key={header.id}
										colSpan={header.colSpan}
										style={{
											width: header.getSize(),
										}}
									>
										{header.isPlaceholder ? null : (
											<div>
												{flexRender(
													header.column.columnDef
														.header,
													header.getContext(),
												)}
											</div>
										)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{paddingTop > 0 && (
						<tr>
							<td style={{ height: `${paddingTop}px` }} />
						</tr>
					)}
					{rowVirtualizer.getVirtualItems().map(virtualItem => {
						const row = rows[virtualItem.index];

						return (
							<tr key={row.id}>
								{row.getVisibleCells().map(cell => (
									<td
										key={cell.id}
										style={{
											width: cell.column.getSize(),
										}}
									>
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext(),
										)}
									</td>
								))}
							</tr>
						);
					})}
					{paddingBottom > 0 && (
						<tr>
							<td style={{ height: `${paddingBottom}px` }} />
						</tr>
					)}
				</tbody>
			</table>
		</TableContainer>
	);
};

const TableContainer = styled.div`
	height: 400px;
	overflow: auto;

	table {
		border-collapse: collapse;
		padding: 0;
		margin: 0;

		thead {
			position: sticky;
			top: 0;
			background: white;
		}
	}
`;
