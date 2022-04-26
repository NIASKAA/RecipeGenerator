import Link from "next/link";
export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/login">Login</Link>
				</li>
				<li>
					<Link href="/register">Register</Link>
				</li>
			</ul>
		</nav>
	);
}
