import React from 'react';
import MainLayout from './../../layout/MainLayout';
import { Link } from 'react-router-dom';
import './Login.scss';
import SelectInfo from '../../components/SelectInfo/SelectInfo';
import { Button } from 'bootstrap';

const Login = () => {
	return (
		<MainLayout>
			<div id="login" className="container mt-4">
				<div className="row">
					<div className="col-lg-4 ">
						<div className="redirect-register p-3 border rounded">
							<h2 class="text-start mb-2">Khách hàng mới</h2>
							<p className="mb-3">
								<strong>Đăng ký tài khoản</strong>
							</p>
							<p>
								Bằng cách tạo tài khoản, bạn sẽ có thể mua sắm nhanh hơn, cập
								nhật trạng thái đơn hàng và theo dõi các đơn hàng bạn đã thực
								hiện trước đó.
							</p>
							<Link to="/register" className="btn btn-primary">
								Đăng ký
							</Link>
						</div>
					</div>
					<div className="col-lg-5 ">
						<div className="login-form p-3 border rounded">
							<h2 class="text-start mb-2">Phản hồi khách hàng</h2>
							<p className="mb-3">
								<strong>Tôi là một khách hàng cũ</strong>
							</p>
							<form action="">
								<div className="form-group mb-4">
									<label className="mb-1" htmlFor="email">
										Địa chỉ email
									</label>
									<input
										className="form-control"
										type="text"
										name="email"
										placeholder="Địa chỉ email"
									/>
									<span className="message text-danger"></span>
								</div>
								<div className="form-group mb-4">
									<label className="mb-1" htmlFor="password">
										Mật khẩu
									</label>
									<input
										className="form-control"
										type="password"
										name="password"
										placeholder="password"
									/>
									<span className="message text-danger"></span>
								</div>
								<Link
									to="forgotPass"
									className="text-danger text-start d-block mb-3"
								>
									Quên mật khẩu
								</Link>
								<button type="submit" className="btn btn-primary">
									Đăng nhập
								</button>
							</form>
						</div>
					</div>
					<div className="col-lg-3">
						<SelectInfo />
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Login;
