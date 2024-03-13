import "./index.scss";
import { Button, Form, Input, Card } from "antd";
import logo from "@/assets//images/logo.png";

const Login = () => {
	const onFinish = (values) => {
		console.log("Success:", values);
	};
	return (
		<div className="login">
			<Card className="login-container">
				<img src={logo} className="logo-image" alt="" />
				<Form onFinish={onFinish} validateTrigger="onBlur">
					<Form.Item
						name="username"
						rules={[
							{ required: true, message: "请输入手机号" },
							{ pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号" },
						]}
					>
						<Input size="large" placeholder="请输入手机号"></Input>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{ required: true, message: "请输入验证码" },
							{ pattern: /^\d{6}$/, message: "请输入正确的验证码" },
						]}
					>
						<Input size="large" placeholder="请输入验证码"></Input>
					</Form.Item>
					<Form.Item>
						<Button type="primary" size="large" block htmlType="submit">
							登录
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};
export default Login;
