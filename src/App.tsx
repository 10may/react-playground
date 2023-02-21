import { ThemeProvider } from 'styled-components';

import { CohortTable } from './Pages/CohortTable';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CohortTable />
		</ThemeProvider>
	);
}

export default App;
