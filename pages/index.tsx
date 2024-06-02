import Link from "next/link";
import AboutPage from "./AboutPage";
export default function Home() {
  return (
    
    <div>
      <h1 className="font-bold text-2xl py-5 text-blue-700">Welcome to my website</h1>
      <Link className="px-3 transition hover:text-red 500 font-bold"  href="/AboutPage">Abouts Me</Link>
    
      <Link className="px-3 transition hover:text-red 500 font-bold"  href="/Customers">Customers</Link>
      
      <Link className="px-3 transition hover:text-red 500 font-bold" href="/Products">Products</Link>
    
      <Link className="px-3 transition hover:text-red 500 font-bold"  href="/Movies">Movies</Link>
      <div>
      <AboutPage/>
      </div>
      
    </div>
  

  );
  }
