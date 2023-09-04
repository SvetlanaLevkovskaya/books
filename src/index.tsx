import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from 'app/app';


createRoot(document.getElementById('root') as HTMLElement).render(
	<HashRouter>
		<App />
	</HashRouter>
)
