import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import ProductCategory from './pages/ProductCategory/ProductCategory';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/hoa-sinh-nhat"
					element={<ProductCategory title="Hoa sinh nhật" />}
				/>
				<Route
					path="/hoa-sinh-nhat-sang-trong"
					element={<ProductCategory title="Hoa sinh nhật sang trọng" />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
