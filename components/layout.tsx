import Head from "next/head";

function NavItem({ title, url, isSelected }) {
  return (
    <li>
      <a
        className={`block px-3 py-2 transition hover:text-red-500 ${
          isSelected ? "text-red-500" : ""
        }`}
        href={url}
      >
        {title}
      </a>
    </li>
  );
}

function Navbar({ pageId }) {
  return (
    <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <NavItem
            title={"Abouts Me"}
            url={"/AboutPage"}
            isSelected={pageId === "abouts"}
          />
         
          <NavItem
            title={"Customers"}
            url={"/Customers"}
            isSelected={pageId === "customers"}
          />
            <NavItem
            title={"FILM"}
            url={"/Movie"}
            isSelected={pageId === "movie"}
          />
          <NavItem
            title={"Products"}
            url={"/Products"}
            isSelected={pageId === "products"}
          />
          <NavItem
            title={"Movies"}
            url={"/Movies"}
            isSelected={pageId === "movies"}
          />
        </ul>
      </nav>
    </div>
  );
}

export default function Layout({ children }) {
  const metadata = children.props.metadata || {
    title: "Default Title",
    description: "Default Description",
    openGraph: {
      image: "/default-image.jpg",
      url: "/default-url",
    },
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
      </Head>
      <Navbar pageId={children.props.pageId} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function FooterLink({ text, url }) {
  return (
    <a className="transition hover:text-teal-500" href={url}>
      {text}
    </a>
  );
}

function Footer() {
  return (
    <footer className="pt-10 px-8 pb-16 border-t">
      <div className="flex justify-between gap-6">
        <div className="flex gap-6 text-sm font-medium text-zinc-600">
          <FooterLink text={"Abouts"} url={"/AboutPage"} />
          <FooterLink text={"FILM"} url={"/Movie"} />
          <FooterLink text={"Customers"} url={"/Customers"} />
          <FooterLink text={"Products"} url={"/Products"} />
          <FooterLink text={"Movies"} url={"/Movies"} />
        </div>
        <p className="text-sm text-zinc-400">
          © 2024 bass toure. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
