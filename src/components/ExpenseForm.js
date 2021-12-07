import React from "react";
import "semantic-ui-css/semantic.css";
import { Segment, Form, Button, Icon, Input } from "semantic-ui-react";

const ExpenseForm = ({
  expenseName,
  expenseAmount,
  handleExpenseName,
  handleExpenseAmount,
  handleExpenseForm,
}) => {
  return (
    <Segment>
      <Form onSubmit={handleExpenseForm}>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Add Expense"
            placeholder="Enter name..."
            name="name"
            value={expenseName}
            onChange={handleExpenseName}
          />

          <Form.Field
            control={Input}
            label="Add Amount"
            placeholder="Enter Amount..."
            name="amount"
            value={expenseAmount}
            onChange={handleExpenseAmount}
          />
        </Form.Group>
        <Button animated>
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>
            <Icon name="send" />
          </Button.Content>
        </Button>
      </Form>
    </Segment>
  );
};

export default ExpenseForm;
