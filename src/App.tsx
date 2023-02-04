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
				<Button variant='primary' size='regular'>
					Label
				</Button>
				<Button variant='secondary' size='regular'>
					Label
				</Button>
				<Button variant='subtle' size='regular'>
					Label
				</Button>
				<Button variant='ghost' size='regular'>
					Label
				</Button>
				<Button variant='ghost' size='regular' disabled>
					Label
				</Button>
			</div>
		</ThemeProvider>
	);
}

export default App;
