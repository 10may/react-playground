import { ThemeProvider } from 'styled-components';

import { React } from './component/svg';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='flex h-screen justify-center'>
				<React fill='red' />
			</div>
		</ThemeProvider>
	);
}

export default App;
