import { ThemeProvider } from 'styled-components';

import Buttons from './Pages/Buttons';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Buttons />
		</ThemeProvider>
	);
}

export default App;
