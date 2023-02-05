import { ThemeProvider } from 'styled-components';

import { Button } from './component';
import { theme } from './theme';

// import { Button } from './component/Button/SingleTailwind';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='flex place-content-center '>
				<h1 className='text-3xl font-bold underline'>Buttons!</h1>
			</div>
			<div className='mt-4 flex flex-col items-center gap-4'>
				<Button size='regular' variant='primary'>
					Label
				</Button>
				<Button size='regular' variant='secondary'>
					Label
				</Button>
				<Button size='regular' variant='subtle'>
					Label
				</Button>
				<Button size='regular' variant='ghost'>
					Label
				</Button>
				<Button size='regular' variant='ghost' disabled>
					Label
				</Button>
			</div>
		</ThemeProvider>
	);
}

export default App;
