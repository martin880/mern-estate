/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Martin</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center mt-3 sm:mt-0 sm:ml-4 sm:w-auto"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none h-4 w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-4 mt-3 sm:mt-0 mx-2 flex-row">
          <li className="font-semibold text-slate-700 hover:underline cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-slate-700 hover:underline cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="font-semibold text-slate-700 hover:underline cursor-pointer">
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 rounded h-7">
                  Login
                </button>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
