import { faker } from '@faker-js/faker';

import { type Category } from './type';

const range = (len: number) => {
	return Array.from(Array(len).keys());
};

const newCategory = (): Category => {
	return {
		id: faker.number.int(),
		na: faker.internet.displayName(),
		// ch: [],
		ta: faker.datatype.boolean(),
		asinCountRange: {
			min: faker.number.int(),
			max: faker.number.int(),
		},
	};
};

export function makeExpandableTableData(...lens: number[]) {
	const makeDataLevel = (depth = 0): Category[] => {
		const len = lens[depth];

		return range(len).map(() => {
			return {
				...newCategory(),
				ch: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
			};
		});
	};

	return makeDataLevel();
}
