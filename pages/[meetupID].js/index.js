import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupPage = () => {
  return (
    <Fragment>
      <MeetupDetail
        title="First meetup"
        address="Some address 5, at some location"
        description="This is the first meetup"
        image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      />
    </Fragment>
  );
};

export default MeetupPage;
