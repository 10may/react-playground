import { Tabs } from '@/component/Tabs';
import { useForm } from 'react-hook-form';

type FormValues = {
	test: string;
};

export const TabsDemo = () => {
	// useForm hook
	const { register, watch } = useForm<FormValues>({
		defaultValues: { test: 'Tab2' },
	});
	console.log(watch());

	return (
		<div className='h-14'>
			<Tabs
				name='test'
				defaultActiveTab='Tab1'
				onClick={v => {
					console.log(v);
				}}
			>
				<Tabs.Tab value={'Tab1'} {...register('test')}>
					Tab1
				</Tabs.Tab>
				<Tabs.Tab value={'Tab2'} {...register('test')}>
					Tab2
				</Tabs.Tab>
				<Tabs.Tab value={'Tab3'} {...register('test')} disabled>
					Tab3
				</Tabs.Tab>
			</Tabs>
		</div>
	);
};
