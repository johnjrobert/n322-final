import React from "react";
import "semantic-ui-css/semantic.css";
import { Grid, Icon, Button, List, Segment } from "semantic-ui-react";

const ExpenseList = ({ expenses }) => {
  return (
    <List>
      {expenses.map((item) => (
        <List.Item key={item.id}>
          <Segment>
            <Grid divided="vertically">
              <Grid.Row columns={3}>
                <Grid.Column>{item.expenseName}</Grid.Column>
                <Grid.Column>$ {item.expenseAmount}</Grid.Column>
                <Grid.Column>
                  <Button.Group>
                    <Button icon color="teal">
                      <Icon name="edit outline"></Icon>
                    </Button>

                    <Button icon color="red">
                      <Icon color="white" name="delete"></Icon>
                    </Button>
                  </Button.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </List.Item>
      ))}
    </List>
  );
};

export default ExpenseList;
