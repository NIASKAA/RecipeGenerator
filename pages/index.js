// import { server } from "../config";

export default function Home({ json }) {
  return (<h1>{json}</h1>);
}

/* these export functions are run on the server, and can only be exported from a page
getServerSideProps - pre-render page on each request, using props returned by this function
getStaticProps - handles page contents, at build time, pre-render the page with props returned by this function
getStaticPaths - handles page paths, at build time, pre-render all paths returned by this function, for pages with dynamic routes that use getStaticProps

pages/api/* maps to an API endpoint, not a page. anything there is basically the node.js server
each file should export a default function request handler that takes (req,res)
API routes are good for masking the server endpoint, ??? about express integration

with script 'next export' you obtain the 'out' folder that can be hosted or locally 'served'
 */

export const getStaticProps = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  // const res = await fetch(`${server}/api/articles`);
  // const json = await res.json();
  return { props: { json: "hello" } };
};