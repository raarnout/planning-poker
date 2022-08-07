import '../scss/styles.scss';
import { Header, Footer } from './3-organisms';
import { Home } from './5-pages/Home';
import { New } from './5-pages/New';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
	return (
		<div id="app">
			<Header></Header>
			<section id="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="new" element={<New />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</section>
			<Footer></Footer>
		</div>
	);
};
export default App;
