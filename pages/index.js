import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import DateComponent from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData }) {
  return (
    <>
  <h1> main page branch test</h1>
    {/* console.log(allPostsData) */}
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className="   list-inside ml-5">
          {allPostsData.map(({ id, date, title }) => (
            <li className="text-blue-500 list-decimal font-bold whitespace-nowrap " key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className=" font-bold text-red-500 ml-5 ">
                <DateComponent dateString={date} className="" />
              </small>
            </li>
          ))}
        </ul>
      </section>
      
    </Layout>
    </>
  );
  
}

