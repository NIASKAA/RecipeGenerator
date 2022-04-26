import Router from "next/router";
import axios from "axios";
import { useState } from "react";

export default function login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const login = async (e) => {
		e.preventDefault();
		const res = await axios.post("/api/user/login", { username, password });
		const { token, user, err } = res.data;
		if (err) alert(err);
		else {
			console.log(token, user);
			// localStorage.setItem("token", token);
			// localStorage.setItem("user", JSON.stringify(user));
			Router.push("/");
		}
	};

	const handleChange = (field) => {
		return (e) => {
			switch (field) {
				case "username":
					setUsername(e.target.value);
					break;
				case "password":
					setPassword(e.target.value);
					break;
				default:
			}
		};
	};

	return (
		<>
			<h3>Login</h3>
			<form onSubmit={login}>
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={username}
					onChange={handleChange("username")}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={handleChange("password")}
					required
				/>

				<button type="submit">Login</button>
			</form>
		</>
	);
}
