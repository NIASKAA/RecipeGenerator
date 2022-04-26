// import { useRouter } from "next/router";
import Link from "next/link";
import Meta from "../../components/Meta";

export default function index({ article }) {
	/* const router = useRouter();
	console.log(router);
	const { id } = router.query;
	return <div>Article {id}</div>; */
	return (
		<>
			<Meta title={article.title} />
			<Link href="/">Go Home</Link>
			<h1>
				Article {article.id}: {article.title}
			</h1>
			<p>{article.body}</p>
		</>
	);
}

// getStaticProps requires a getStaticPaths
export const getStaticProps = async (context) => {
	// console.log(context);
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
	const article = await res.json();

	return { props: { article } };
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
	const articles = await res.json();

	const ids = articles.map((article) => article.id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};

// getServerSideProps if you want to make the request every time user requests this page /article/:id
/* export const getServerSideProps = async (context) => {
	console.log(context);
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
	const article = await res.json();

	return { props: { article } };
}; */
