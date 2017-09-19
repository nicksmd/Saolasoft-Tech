/**
 * Created by quangh on 9/19/2017.
 */
import Layout from '../components/layout'

// const Content = (props)=>(
//   <div>
//       <h1>{props.url.query.id}</h1>
//       <p>This is post's content</p>
//   </div>
// );
//
// //url prop is only exposed to the page's main component.
// // That's not exposed for other components used in the page
//
// export default (props)=>(
//     <Layout>
//       <Content url={props.url}/>
//     </Layout>
// )

const Post = (props)=>(
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>
);

Post.getInitialProps = async function(context){
  const id = context.query.id;
  console.log(context);
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show: ${show.name}`);
  return {
      show: show
  }
};

export default Post
