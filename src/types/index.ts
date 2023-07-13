// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type Prettify<T> = unknown & {
	[K in keyof T]: T[K];
};
