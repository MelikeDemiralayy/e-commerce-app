import Link from "next/link";
import SearchBar from "./SearchBar";
import { MdFavorite } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import Head from "next/head";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Products"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/Products/add-products"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Add Product
              </Link>
            </li>
          </ul>
        </div>{" "}
        <div className="flex items-center space-x-4 ml-auto">
          <div></div> <SearchBar />
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
    </nav>
  );
};

export default Navbar;
