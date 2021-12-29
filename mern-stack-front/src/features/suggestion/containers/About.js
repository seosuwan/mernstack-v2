import PropTypes from "prop-types";
import React, { Fragment } from "react";
import TeamMemberOne from "../components/TeamMemberOne";
import { LayOut } from "features/common";
import "features/common/font/font.scss"
import { AppTasks } from "features/todo";

export default function About(){

  return (
    <LayOut>
      <AppTasks/>
    <Fragment>
        <TeamMemberOne />
    </Fragment>
    </LayOut>
  );
};

About.propTypes = {
  location: PropTypes.object
};

