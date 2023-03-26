import React from "react";
import Styles from "../schedule/schedule.module.css";

const ScheduleCard = () => {
  return (
    <div className={`${Styles.container_grid} ${Styles.container_grid_margin}`}>
      <div>
        <div
          className={`${Styles.container_flexbox} ${Styles.container_flexbox_border}`}
        >
          <p className={`${Styles.hackathonHeading}`}>Hackathon Timeline</p>
          <div
            direction="column"
            width="100%"
            className={` ${Styles.hackathonBoxes} ${Styles.hackathonBoxesWidth}`}
          >
            <div
              direction="[object Object]"
              className={`${Styles.hackathonBorderBox} ${Styles.hackathonIndividualBox}`}
            >
              <div className={`${Styles.registrationBox}`}>
                <p className={`${Styles.registrationTitle}`}>
                  Registration starts
                </p>
              </div>
              <div
                direction="[object Object]"
                className={`${Styles.registrationBoxRight}`}
              >
                <div
                  className={`${Styles.registrationBoxRightFlexOutline} ${Styles.registrationBoxRightFlex}`}
                >
                  <div
                    name="calendar"
                    color="grey-7B"
                    className={`${Styles.svgClass}`}
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
                      class="prefix__feather prefix__feather-calendar"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 2v4M8 2v4M3 10h18"></path>
                    </svg>
                  </div>
                  <p className={`${Styles.dateTime}`}>04 December 2022</p>
                </div>
                <div
                  className={`${Styles.registrationBoxRightFlexOutline} ${Styles.registrationBoxRightFlex}`}
                >
                  <div
                    name="clock"
                    color="grey-7B"
                    className={`${Styles.svgClass}`}
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
                      class="prefix__feather prefix__feather-clock"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                  <p className={`${Styles.dateTime}`}>05:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
