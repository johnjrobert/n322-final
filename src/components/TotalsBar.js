import React from "react";
import "semantic-ui-css/semantic.css";
import { Segment, Header } from "semantic-ui-react";

const TotalsBar = (props) => {
  return (
    <React.Fragment>
      <Header textAlign="center">Monthly Totals</Header>
      <Segment.Group horizontal>
        <Segment></Segment>
        <Segment>Remaining: ${props.expenseAmount}</Segment>
        <Segment>Spent So Far:</Segment>
      </Segment.Group>
    </React.Fragment>
  );
};

export default TotalsBar;
