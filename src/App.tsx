
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='flex h-screen items-center justify-center'>
				React Playground
			</div>
		</ThemeProvider>
	);
}

export default App;
