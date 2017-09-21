/**
 * Created by quangh on 9/19/2017.
 */
import Layout from '../components/layout'
import * as React from "react";
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

// ugly url
// const PostLink = (props)=>(
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );

// nicer url
// but  it only worked with client side navigations.
// When we reload page, it gives us a 404 page.

//
// const PostLink = (props)=>{
//     return (<li>
//                 <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
//                     <a>{props.title}</a>
//                 </Link>
//             </li>)
// };
//
// export default ()=>(
//     <Layout>
//         <h1>I am Quang</h1>
//         <ul>
//             <PostLink id="hello-nextjs" title="title of hello next.js"/>
//             <PostLink id="hello-girls" title="title of hello girls"/>
//             <PostLink id="hello-guys" title="title of hello guys"/>
//         </ul>
//     </Layout>
// )


const Index = (props)=>(
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) =>(
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <Link href={'/list'}>
            <a>{"List page"}</a>
        </Link>
        <hr/>
        <Link href={'/boil-water'}>
            <a>{"Boiling calculator"}</a>
        </Link>
        <hr/>
        <Link href="/think-in-react">
            <a>{"Think in React"}</a>
        </Link>
    </Layout>
);

Index.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data
    }
};

export default Index