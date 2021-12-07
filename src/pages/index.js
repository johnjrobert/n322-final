import React, { useState } from "react";
import "semantic-ui-css/semantic.css";
import { Container, Header, Segment } from "semantic-ui-react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
// import TotalsBar from "../components/TotalsBar";

const ALL_EXPENSES = [
  { id: 1, expenseName: "Buy a book", expenseAmount: 20 },
  { id: 2, expenseName: "Buy a milk", expenseAmount: 5 },
  { id: 3, expenseName: "Book a flight ticket", expenseAmount: 225 },
];

const HomePage = () => {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleExpenseName = (event) => {
    console.log(event.target.value);
    setExpenseName(event.target.value);
  };

  const handleExpenseAmount = (event) => {
    console.log("Amount ", event.target.value);
    setExpenseAmount(event.target.value);
  };

  const handleExpenseForm = (event) => {
    event.preventDefault();

    if (expenseName !== "" && expenseAmount > 0 && expenseAmount !== "") {
      const expense = { expenseName, expenseAmount };

      setExpenses([...expenses, expense]);

      setExpenseName("");
      setExpenseAmount("");
    } else {
      console.log("You have put in invalid info.");
    }
  };

  let budget = 2000;
  let expenseTotal = expenses.reduce((accumulator, currentValue) => {
    return (accumulator += parseInt(currentValue.expenseAmount));
  }, 0);

  return (
    <React.Fragment>
      <Container>
        <Header>Hi there</Header>
        <Segment.Group horizontal>
          <Segment>Budget: ${budget}</Segment>
          <Segment>Remaining: ${budget - expenseTotal}</Segment>
          <Segment>Spent So Far: ${expenseTotal}</Segment>
        </Segment.Group>
        <ExpenseForm
          expenseName={expenseName}
          expenseAmount={expenseAmount}
          handleExpenseAmount={handleExpenseAmount}
          handleExpenseName={handleExpenseName}
          handleExpenseForm={handleExpenseForm}
        />
        <ExpenseList expenses={expenses} />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
