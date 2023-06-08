import { ThemeProvider } from 'styled-components';

import { ExpandableTable } from './Pages/ExpandableTable';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='flex h-screen items-center justify-center'>
				<ExpandableTable />
			</div>
		</ThemeProvider>
	);
}

export default App;
