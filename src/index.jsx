import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './templates/App';
import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<GlobalStyles />
	</React.StrictMode>,
);
