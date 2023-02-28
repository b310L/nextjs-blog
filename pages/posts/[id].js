import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import DateComponent  from '../../components/date' ;
// Add this import

export async function getStaticPaths() {
    // getAllPostIds => filename.md=> filename=>? id=?[ssg-ssr,pre-rendering]
    const paths = getAllPostIds();
    console.log('paths = '+JSON.stringify(paths));
    return {
      paths,
      fallback: false,
    };
  }
  export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
    // console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className="bg-red-100">{postData.title}</h1>
            {/* {postData.id} */}
             <div className="bg-lime-600">
                {/* {postData.date} */}
                <DateComponent dateString={postData.date} />
            </div>
         
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }

