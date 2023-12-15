import Link from "next/link";
import SearchBar from "./SearchBar";
import { MdFavorite } from "react-icons/md";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import Head from "next/head";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
            <li>
              <Link href="/" className="text-lg font-semibold">
                TrendGalaksy
              </Link>
            </li>
            <li>
              <Link
                href="/Products"
                className="block py-2 px-3 text-gray-900 rounded  md:p-0 dark:text-white md:dark:hover:text-grey dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/Products/add-products"
                className="block py-2 px-3 text-gray-900 rounded  md:p-0 dark:text-white md:dark:hover:text-grey dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Add Product
              </Link>
            </li>
          </ul>
        </div>

        <ul className="flex items-center space-x-4">
          <li>
            <SearchBar />
          </li>
          <li>
            <Link href="/Favorites" className="hover:text-grey">
              <MdFavorite size={30} />
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-grey">
              <FaShoppingBasket color="black" size={30} />
            </Link>
          </li>
          <li>
            <Link href="/auth/register" className="hover:text-grey">
              <FaUser color="black" size={25} />
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
