import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Mohammad Hossein";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                {/*up icon in tab browser */}
                <link rel="icon" href="/favicon.ico" />

                <meta
                    name="description" //description for google=>
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                {/* Og:title
این متا تگ در واقع نشان دهنده عنوان محتوا است. این قسمت در فیسبوک به صورت بولد و کاملا نمایان، نشان داده می‌شود. بنابراین، سعی کنید جذاب‌ترین و در عین حال کوتاه‌ترین عنوان را انتخاب کنید. فیسبوک برای این قسمت پیشنهاداتی ارائه داده است:

این قسمت را به تمام صفحات "اشتراک‌پذیر" لینک دهید.
تمرکز خود را بر روی نرخ کلیک و ارزش محتوا بگذارید.
حتما از کمترین حروف استفاده کنید. برای موبایل 40 حرف و برای دسکتاپ 60 حرف.
از عناوین خام و جذاب استفاده کنید. هرگز نام تجاری برند خود و نام سایت را درج نکنید. */}
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>home
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <> 
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}
