import React from 'react';
import { Link } from 'react-router-dom';

const SelectInfo = () => {
	return (
		<div className="border rounded">
			<ul>
				<li className="py-2 px-3 border-bottom">
					<Link>Đăng nhập</Link>
				</li>
				<li className="py-2 px-3 border-bottom">
					<Link>Đăng ký</Link>
				</li>
				<li className="py-2 px-3 border-bottom">
					<Link>Đã quên mật khẩu</Link>
				</li>
				<li className="py-2 px-3 border-bottom">
					<Link>Tài khoản của tôi</Link>
				</li>
				<li className="py-2 px-3 ">
					<Link>Lịch sử đơn hàng</Link>
				</li>
			</ul>
		</div>
	);
};

export default SelectInfo;
