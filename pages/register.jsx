import Router from "next/router";
import axios from "axios";
import { useState } from "react";

export default function login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const register = async (e) => {
		e.preventDefault();
		const res = await axios.post("/api/user/register", { username, password });
		const { err } = res.data;
		if (err) alert(err);
		else Router.push("/login");
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
			<h3>Register</h3>
			<form onSubmit={register}>
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
				<button type="submit">Register</button>
			</form>
		</>
	);
}
