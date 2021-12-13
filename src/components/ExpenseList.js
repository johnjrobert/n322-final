import React, { useState } from "react";
import "semantic-ui-css/semantic.css";
import {
  Grid,
  Icon,
  Button,
  List,
  Segment,
  Input,
  Form,
} from "semantic-ui-react";

const ExpenseList = ({
  expenses,
  handleRemove,
  handleClear,
  handleEditForm,
  editing,
  changeEditing,
  expenseName,
  handleExpenseName,
  expenseAmount,
  handleExpenseAmount,
  newNameEdit,
  newAmountEdit,
  handleNewExpenseAmount,
  handleNewExpenseName,
}) => {
  return (
    <List>
      <Button onClick={handleClear}>Clear List</Button>
      {expenses.map((item, index) => (
        <List.Item key={item.index} index={index}>
          <Segment>
            <Grid divided="vertically">
              <Grid.Row columns={3}>
                {item.edit ? (
                  <Grid.Row columns={2}>
                    <Grid.Column>{item.expenseName}</Grid.Column>
                    <Grid.Column>$ {item.expenseAmount}</Grid.Column>
                  </Grid.Row>
                ) : (
                  // <h1>Hello</h1>
                  <Form onClick={() => handleEditForm(index)}>
                    <Form.Field
                      label="Edit Name"
                      placeholder="Edit name..."
                      control={Input}
                      value={newNameEdit}
                      onChange={handleNewExpenseName}
                    ></Form.Field>
                    <Form.Field
                      label="Edit Amount"
                      placeholder="Edit amount..."
                      control={Input}
                      value={newAmountEdit}
                      onChange={handleNewExpenseAmount}
                    ></Form.Field>
                    <Button>Submit Edit</Button>
                  </Form>
                )}
                <Grid.Column>
                  <Button.Group>
                    <Button
                      icon
                      color="teal"
                      onClick={() => changeEditing(index)}
                    >
                      <Icon name="edit outline"></Icon>
                    </Button>

                    <Button
                      icon
                      color="red"
                      onClick={() => handleRemove(index)}
                    >
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
