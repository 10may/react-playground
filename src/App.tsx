import { ThemeProvider } from 'styled-components';

import { RowSelectionTable } from './component/Table/RowSelection';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RowSelectionTable />
		</ThemeProvider>
	);
}

export default App;
