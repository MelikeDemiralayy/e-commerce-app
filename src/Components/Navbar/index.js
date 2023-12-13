import Link from "next/link";
import SearchBar from "./SearchBar";
import { MdFavorite } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import Head from "next/head";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,500&family=Whisper&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="navbar  z-10 bg-green  flex flex-wrap items-center justify-between p-2">
        <div className="flex items-center space-x-4 font-barlow font-semibold text-lg text-white">
          <div className="dropdown inline-block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Products">Products</Link>
              </li>
              <li>
                <Link href="/Products/add-products">Add Product</Link>
              </li>
            </ul>
          </div>
          <Link href="/">TrendGalaksy</Link>
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <div>
            <SearchBar />
          </div>
          <div>
            <Link href="/Favorites">
              <MdFavorite color="black" size={30} />
            </Link>
          </div>
          <div>
            <Link href="/cart">
              <FaBasketShopping color="black" size={30} />
            </Link>
          </div>
          <div>
            <Link href="/auth/register">
              <FaUser color="black" size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
