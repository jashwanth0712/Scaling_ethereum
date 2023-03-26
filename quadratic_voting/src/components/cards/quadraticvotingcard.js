import React, { useState } from "react";
import Styles from "../quadratic/quadratic.module.css";
import Image from "next/image";
import data from "../data/data.json";

const QuadraticVotingCard = (props) => {
  const [voteCount, setVoteCount] = useState(null);
  //console.log(props.title);
  const handleVoteClick = () => {
    if (voteCount === null) {
      setVoteCount(1);
    } else {
      setVoteCount(voteCount + 1);
    }
    const data = [voteCount + 1, props.title];
    props.onSendData(data);
  };

  return (
    <div className={Styles.eachVotingBox}>
      <div className={Styles.eachVotingBoxUpper}>
        <div className={Styles.eachVotingBoxUpperLeft}>
          <div className={Styles.eachVotingBoxUpperLeftMini}>
            <div className={Styles.eachVotingBoxUpperLeftMiniLeft}>
              <Image
                src="/assests/images/1.jpg"
                height={80}
                width={80}
                alt="hi"
                style={{
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className={Styles.eachVotingBoxUpperLeftMiniRight}>
              <h5>{props.title}</h5>
              <p>by Al Mint</p>
            </div>
          </div>
        </div>
        <div className={Styles.eachVotingBoxUpperRight}>
          <a>
            <button onClick={handleVoteClick}>
              {voteCount === null ? "Vote" : `${voteCount}`}
            </button>
          </a>
        </div>
      </div>
      <div className={Styles.eachVotingBoxLower}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          convallis diam vel gravida lobortis. Vestibulum vulputate mollis
        </p>
        <div className={`${Styles.eachVotingBoxLowerIcons}`}>
          <div
            className={`${Styles.eachVotingBoxLowerIconsOutline} ${Styles.eachVotingBoxLowerIconsRightFlex}`}
          >
            <div name="eye" color="grey-7B" className={`${Styles.svgClass}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="113.407"
                height="69.589"
                viewBox="0 0 113.407 69.589"
              >
                <g
                  id="Atoms_Icons_Eye_Active"
                  data-name="Atoms/ Icons/ Eye Active"
                  transform="translate(2.5 2.5)"
                >
                  <g id="Eye">
                    <path
                      id="Path"
                      d="M108.407,32.295S84.224,64.589,54.2,64.589,0,32.295,0,32.295,24.183,0,54.2,0,108.407,32.295,108.407,32.295Z"
                      fill="none"
                      stroke="#022c43"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="5"
                    />
                    <ellipse
                      id="Oval"
                      cx="16.678"
                      cy="16.147"
                      rx="16.678"
                      ry="16.147"
                      transform="translate(37.525 16.147)"
                      fill="none"
                      stroke="#022c43"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="5"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <p className={`${Styles.overview}`}>Overview</p>
          </div>
          <div
            className={`${Styles.eachVotingBoxLowerIconsOutline} ${Styles.eachVotingBoxLowerIconsRightFlex}`}
          >
            <div name="github" color="grey-7B" className={`${Styles.svgClass}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="64px"
                height="64px"
              >
                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
              </svg>
            </div>
            <p className={`${Styles.overview}`}>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuadraticVotingCard;
