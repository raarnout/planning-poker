import '../scss/styles.scss';
import { Header, Footer } from './3-organisms';
import { Home } from './5-pages/Home';
import { New } from './5-pages/New';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<div id="app">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/:id" element={<Home />} />
				</Route>
				<Route path="new" element={<New />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
};
export default App;
