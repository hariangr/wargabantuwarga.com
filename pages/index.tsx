import Head from "next/head";
import { Script } from "../components/script";
import config from "../lib/config";

type Props = {
  html: string;
  css: string;
};

const meta = {
  title: `${config.site_name} | ${config.site_tagline}`,
  description: config.site_description,
};

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/google-font-preconnect */}
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" as="font" />
        <style dangerouslySetInnerHTML={{ __html: props.css }} />
      </Head>
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5X4ZPBX');`,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5X4ZPBX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <main>
        <header>
          <h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://firebase-kanvas.imgix.net/warga_bantu_warga/hero_banner.png?auto=format,compress,enhance&fm=pjpg&cs=tinysrgb&fit=scale"
              alt="Warga Bantu Warga"
              height="291"
              width="650"
              style={{ maxWidth: 650, height: "auto", width: "100%" }}
            />
          </h1>
        </header>
        <article dangerouslySetInnerHTML={{ __html: props.html }}></article>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const data = require("../data/wbw.json");
  return { html: data.html, css: data.css };
};
