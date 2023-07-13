import { ThemeProvider } from 'styled-components';

import { MultipleSelect } from './component/MultipleSelect';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='flex h-screen items-center justify-center'>
				<MultipleSelect />
			</div>
		</ThemeProvider>
	);
}

export default App;
