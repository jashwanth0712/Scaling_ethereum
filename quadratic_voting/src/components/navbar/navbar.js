import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div
      direction="column"
      className="sc-gJwTLC sc-fxvKuh container container_2"
    >
      <div className="sc-gJwTLC sc-fxvKuh  sub_container">
        <ul className=" nav_list_name">
          <li className="nav_list_sub_names">
            <Link href="/">
              <button
                type="button"
                data-selected="true"
                className=" nav_each_title"
              >
                {(router.pathname === "/" ||
                  router.pathname === "/overview") && (
                  <div className=" active"></div>
                )}
                <p className=" nav_item_name  nav_item_name_2">Overview</p>
              </button>
            </Link>
          </li>
          <li className="nav_list_sub_names">
            <Link href="/schedule">
              <button
                type="button"
                data-selected="false"
                className="nav_each_title"
              >
                {router.pathname === "/schedule" && (
                  <div className="active"></div>
                )}
                <p className=" nav_item_name nav_item_name_2">Schedule</p>
              </button>
            </Link>
          </li>
          <li className="nav_list_sub_names">
            <Link href="/leaderboard">
              <button
                type="button"
                data-selected="false"
                className="nav_each_title"
              >
                {router.pathname === "/leaderboard" && (
                  <div className=" active"></div>
                )}
                <p className=" nav_item_name nav_item_name_2">Leaderboard</p>
              </button>
            </Link>
          </li>
          <li className="nav_list_sub_names">
            <Link href="/quadratic">
              <button
                type="button"
                data-selected="false"
                className="nav_each_title"
              >
                {router.pathname === "/quadratic" && (
                  <div className=" active"></div>
                )}
                <p className="nav_item_name nav_item_name_2">
                  Quadratic Voting
                </p>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
