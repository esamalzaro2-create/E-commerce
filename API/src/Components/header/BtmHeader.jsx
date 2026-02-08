import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link, Links, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import "./Header.css";
function BtmHeader() {
  const NavLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location]);
  return (
    <div className="btm-header">
      <div className="container">
        <nav className="nav">
          <div className="category-nav">
            <div
              className="category-btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <IoMdMenu />
              <p>Browse Category</p>
              <MdArrowDropDown />
            </div>
            <div
              className={`category-nav-list ${isCategoryOpen ? "active" : ""}`}
            >
              {categories.map((category) => (
                <Link key={category.slug} to={`category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-links">
            {NavLinks.map((item) => (
              <li
                key={item.link}
                className={location.pathname === item.link ? "active" : ""}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sign-regs-icon">
          <Link to="">
            <PiSignInBold />
          </Link>
          <Link to="">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;
