export interface ExpandableTableData {
	success: boolean;
	response: Category[];
}

export interface Category {
	id: number;
	na: string;
	ch?: Category[];
	ta: boolean;
	asinCountRange: AsinCountRange;
}

export interface AsinCountRange {
	min: number;
	max: number;
}
