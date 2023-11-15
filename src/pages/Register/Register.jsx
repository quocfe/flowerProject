import React from 'react';
import './Register.scss';
import MainLayout from '../../layout/MainLayout';
import { Link } from 'react-router-dom';
import SelectInfo from '../../components/SelectInfo/SelectInfo';

const Register = () => {
	return (
		<MainLayout>
			<div id="register" className="container mt-4">
				<div class="row">
					<div className="col-lg-9  ">
						<div className="redirect-login ">
							<h2 className="text-start mb-2">Đăng ký tài khoản</h2>
							<p className="mb-3">
								Nếu bạn đã có tài khoản với chúng tôi, vui lòng đăng nhập tại{' '}
								<Link to="/login" className="text-danger">
									Đăng nhập
								</Link>
							</p>
						</div>
						<h3 className="title-form">Thông tin cá nhân của bạn</h3>
						<form action="">
							<div className="row mb-3 ">
								<label htmlFor="firstname" className="col-sm-2 col-form-label">
									Họ tên
								</label>
								<div className="col-sm-10">
									<input
										type="text"
										name="firstname"
										value=""
										placeholder="Họ tên"
										id="firstname"
										className="form-control"
									/>
									<span className="message text-danger"></span>
								</div>
							</div>
							<div className="row mb-3 ">
								<label htmlFor="email" className="col-sm-2 col-form-label">
									E-mail
								</label>
								<div className="col-sm-10">
									<input
										type="text"
										name="email"
										value=""
										placeholder="E-mail"
										id="email"
										className="form-control"
									/>
									<span className="message text-danger"></span>
								</div>
							</div>
							<div className="row mb-3 ">
								<label
									htmlFor="numberphone"
									className="col-sm-2 col-form-label"
								>
									Điện thoại
								</label>
								<div className="col-sm-10">
									<input
										type="text"
										name="numberphone"
										value=""
										placeholder="Điện thoại"
										id="numberphone"
										className="form-control"
									/>
									<span className="message text-danger"></span>
								</div>
							</div>
							<div className="row mb-3 ">
								<label htmlFor="password" className="col-sm-2 col-form-label">
									Điện thoại
								</label>
								<div className="col-sm-10">
									<input
										type="password"
										name="password"
										value=""
										placeholder="Password"
										id="password"
										className="form-control"
									/>
									<span className="message text-danger"></span>
								</div>
							</div>
							<div className="form-check user-select-none d-flex align-items-center justify-content-end gap-1">
								<input type="checkbox" name="checkbox" id="checkbox" />
								<label htmlFor="checkbox" className="checkbox">
									<p className="mb-0 ">
										Tôi đã đồng ý với{' '}
										<Link className="text-danger">Điều khoản điều kiện</Link>
									</p>
								</label>
								<button type="submit" className="btn btn-primary ">
									Đăng ký
								</button>
							</div>
						</form>
					</div>
					<div className="col-lg-3">
						<SelectInfo></SelectInfo>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Register;
