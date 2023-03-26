import React from "react";
import Styles from "./overview.module.css";
const Overview = () => {
  return (
    <div className={Styles.flexbox}>
      <div className={Styles.leftFlex}>
        <img src="/assests/images/1.jpg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          convallis diam vel gravida lobortis. Vestibulum vulputate mollis
          augue, ut ullamcorper metus porta et. Aliquam eget vehicula massa.
          Vivamus feugiat sit amet erat non ultrices. Ut imperdiet erat et massa
          consequat dapibus. Duis in semper erat. Nam sollicitudin dui eu mattis
          dictum. Pellentesque quis accumsan metus. Suspendisse in rutrum justo,
          vitae laoreet nibh. Proin metus enim, convallis nec ipsum nec,
          fringilla aliquet tortor. Donec a nisl eget nisi congue faucibus. Nam
          ullamcorper tellus molestie ultrices malesuada. Cras ut volutpat
          nulla, nec porttitor diam. Duis risus sem, vestibulum id lacinia eget,
          laoreet at lacus. Nullam eu lacus risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          convallis diam vel gravida lobortis. Vestibulum vulputate mollis
          augue, ut ullamcorper metus porta et. Aliquam eget vehicula massa.
          Vivamus feugiat sit amet erat non ultrices. Ut imperdiet erat et massa
          consequat dapibus. Duis in semper erat. Nam sollicitudin dui eu mattis
          dictum. Pellentesque quis accumsan metus. Suspendisse in rutrum justo,
          vitae laoreet nibh. Proin metus enim, convallis nec ipsum nec,
          fringilla aliquet tortor. Donec a nisl eget nisi congue faucibus. Nam
          ullamcorper tellus molestie ultrices malesuada. Cras ut volutpat
          nulla, nec porttitor diam. Duis risus sem, vestibulum id lacinia eget,
          laoreet at lacus. Nullam eu lacus risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          convallis diam vel gravida lobortis. Vestibulum vulputate mollis
          augue, ut ullamcorper metus porta et. Aliquam eget vehicula massa.
          Vivamus feugiat sit amet erat non ultrices. Ut imperdiet erat et massa
          consequat dapibus. Duis in semper erat. Nam sollicitudin dui eu mattis
          dictum. Pellentesque quis accumsan metus. Suspendisse in rutrum justo,
          vitae laoreet nibh. Proin metus enim, convallis nec ipsum nec,
          fringilla aliquet tortor. Donec a nisl eget nisi congue faucibus. Nam
          ullamcorper tellus molestie ultrices malesuada. Cras ut volutpat
          nulla, nec porttitor diam. Duis risus sem, vestibulum id lacinia eget,
          laoreet at lacus. Nullam eu lacus risus.
        </p>
      </div>
      <div className={Styles.rightFlex}>
        <div>
          <div
            className={`${Styles.rightFlexCard} ${Styles.rightFlexCardDisplay}`}
          >
            <div className={`${Styles.rightFlexCardDisplay}`}></div>
            <div className={`${Styles.rightFlexCardDisplay1}`}>
              <div className={`${Styles.rightFlexUpperMargin}`}>
                <ul className={`${Styles.rightFlexCardPostion}`}>
                  <li className={`${Styles.rightFlexGreyHeadingsMargin}`}>
                    <p className={`${Styles.rightFlexGreyHeadings}`}>
                      Runs from
                    </p>
                    <p className={`${Styles.rightFlexDarkHeadings}`}>
                      Feb 4 - 20, 2023
                    </p>
                  </li>
                  <li className={`${Styles.rightFlexGreyHeadingsMargin}`}>
                    <p className={`${Styles.rightFlexGreyHeadings}`}>
                      Happening
                    </p>
                    <p className={`${Styles.rightFlexDarkHeadings}`}>Online</p>
                  </li>
                </ul>
              </div>
              <div className={`${Styles.rightFlexBottomBox}`}>
                <div className={`${Styles.rightFlexGreyBox}`}>
                  <p className={`${Styles.rightFlexGreyBoxHeading}`}>
                    Applications closed
                  </p>
                  <p className={`${Styles.rightFlexGreyBoxSubHeading}`}>
                    Hackathon has ended
                  </p>
                </div>
                <a href="https://github.com/">
                  <button className={`${Styles.rightFlexButton}`}>
                    See Contestants
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
