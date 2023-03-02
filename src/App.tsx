import { ThemeProvider } from 'styled-components';

import { ShareOfVoice } from './Pages/ShareOfVoice';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ShareOfVoice />
		</ThemeProvider>
	);
}

export default App;
