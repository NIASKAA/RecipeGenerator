import Nav from "./Nav";
import Meta from "./Meta";

export default function Layout({ children }) {
	return (
		<>
			<Meta />
			<Nav />
			<div>
				<main>{children}</main>
			</div>
		</>
	);
}

/* 
	return (
		<Link href="/article/[id]" as={`/article/${article.id}`}>
			<a className={styles.card}>
				<h3>{article.title} &rarr;</h3>
				<p>{article.body}</p>
			</a>
		</Link>
	);
   */
