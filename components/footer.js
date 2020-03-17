import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Instagram from "../images/Instagram.png";
import Twitter from "../images/Twitter.png";
import Github from "../images/Github.png";

const footer = () => {
  //   const A = styled.a`
  //     padding-right: 10px;
  //   `;
  return (
    <footer
      style={{ backgroundColor: "#110c11", color: "white", padding: "32px" }}
    >
      <h2 style={{ letterSpacing: "3px" }}>Moviecloud</h2>

      <ul
        className="navbar-nav ml-auto"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start"
        }}
      >
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link" style={{ paddingRight: "40px" }}>
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/profile">
            <a className="nav-link" style={{ paddingRight: "50px" }}>
              Profile
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/discover">
            <a className="nav-link">Discover</a>
          </Link>
        </li>
      </ul>
      <br />
      <p style={{ color: "#d3d3d3" }}>
        Copyright &copy;2020 <br /> Code and design by Abdulahi Roble
      </p>
      <br />
      {/* <ul
        className="navbar-nav ml-auto"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <li className="nav-item">
          {" "}
          <img
            style={{ width: "50%" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
            alt=""
          />
        </li>
        <li className="nav-item">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fas fa-code"></i>
        </li>
      </ul> */}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <img
          style={{ width: "60%", marginRight: "50px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
          alt=""
        />
        <div className="item">
          <img src={Instagram} alt="" />
        </div>
        <div
          className="item"
          style={{ paddingLeft: "6px", paddingRight: "6px" }}
        >
          <img src={Twitter} alt="" />
        </div>
        <div className="item">
          <img src={Github} alt="" />
        </div>
      </div>
      <br />
    </footer>
  );
};

export default footer;
