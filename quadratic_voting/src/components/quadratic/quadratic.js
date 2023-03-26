import React from "react";
import { useState } from "react";
import Styles from "./quadratic.module.css";
import QuadraticVotingCard from "../cards/quadraticvotingcard";
import data from "../data/data.json";

const Quadratic = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [parentVoteCount, setParentVoteCount] = useState(0);
  const [parentVoteTitle, setParentVoteTitle] = useState("");

  const filteredData = data.data.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleChildData = (d) => {
    setParentVoteCount(d[0]);

    setParentVoteTitle(d[1]);
  };
  return (
    <div>
      <div className={Styles.jqcOqq}>
        <div className={Styles.gsGZgl}>
          <div className={Styles.fRfwkk}>
            <div
              direction="column"
              width="100%"
              className={`${Styles.fRfwkk} ${Styles.gZaRMg}`}
            >
              <div width="100%" className={`${Styles.kVeYmi}`}>
                <div
                  name="search"
                  color="grey-5"
                  className={`${Styles.dCbuVU} ${Styles.dXUwTH}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="prefix__feather prefix__feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div>
                <div direction="row" className={`${Styles.bUTEtI}`}>
                  <input
                    placeholder="Search for projects by name"
                    type="text"
                    className={`${Styles.eZnkZD}`}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.votingFlexBox}>
        <div className={Styles.votingFlexBoxLeft}>
          <div
            className={`${Styles.leftFlexCard} ${Styles.leftFlexCardDisplay}`}
          >
            <div className={Styles.leftBoxUpperBorder}>
              <h4>Voting Summary</h4>
              <p>
                You are left with:<span> 100 Votes</span>
              </p>
            </div>
            <div className={Styles.leftBoxLowerBorder}>
              <div className={Styles.leftBoxLowerBorderP1}>
                {parentVoteCount === 0 ? (
                  "Click Vote on Project Card to Begin"
                ) : (
                  <div className={Styles.leftBoxLowerBorderP1Sub}>
                    <div className={Styles.leftBoxLowerBorderP1SubLeft}>
                      {parentVoteTitle}
                    </div>
                    <div className={Styles.leftBoxLowerBorderP1SubRight}>
                      {parentVoteCount}
                    </div>
                  </div>
                )}
              </div>
              <a>
                <button className={Styles.leftFlexButton}>Review Votes</button>
              </a>
              <p>Spend all your votes to Review</p>
            </div>
          </div>
        </div>
        <div className={Styles.votingFlexBoxRight}>
          {filteredData.map((e) => {
            return (
              <QuadraticVotingCard
                key={e.id}
                title={e.text}
                onSendData={handleChildData}
              />
            );
          })}
          {/* <QuadraticVotingCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Quadratic;
