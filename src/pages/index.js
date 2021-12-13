import React, { useState } from "react";
import "semantic-ui-css/semantic.css";
import { Container, Header, Segment } from "semantic-ui-react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

// import TotalsBar from "../components/TotalsBar";

const ALL_EXPENSES = [
  { id: 1, expenseName: "Rent", expenseAmount: 500, edit: true },
  { id: 2, expenseName: "electric", expenseAmount: 50, edit: true },
  { id: 3, expenseName: "car", expenseAmount: 225, edit: true },
];

const HomePage = () => {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [editing, setEditing] = useState(true);
  const [newNameEdit, setNewNameEdit] = useState("");
  const [newAmountEdit, setNewAmountEdit] = useState("");

  const handleExpenseName = (event) => {
    console.log(event.target.value);
    setExpenseName(event.target.value);
  };

  const handleExpenseAmount = (event) => {
    console.log("Amount ", event.target.value);
    setExpenseAmount(event.target.value);
  };

  const handleNewExpenseName = (event) => {
    console.log(event.target.value);
    setNewNameEdit(event.target.value);
  };

  const handleNewExpenseAmount = (event) => {
    console.log("Amount ", event.target.value);
    setNewAmountEdit(event.target.value);
  };

  const handleExpenseForm = (event) => {
    event.preventDefault();

    if (expenseName !== "" && expenseAmount > 0 && expenseAmount !== "") {
      const expense = { expenseName, expenseAmount, edit: true };
      setExpenses([...expenses, expense]);
      setExpenseName("");
      setExpenseAmount("");
    } else {
      console.log("You have put in invalid info.");
    }
  };

  const handleRemove = (index) => {
    const newList = expenses.filter((expense, i) => {
      if (i !== index) {
        return expense;
      }
    });
    console.log("Delete", index);

    setExpenses(newList);
  };

  const handleEditForm = (index) => {
    if (newNameEdit !== "" && newAmountEdit > 0 && newAmountEdit !== "") {
      const newList = expenses.map((item, i) => {
        if (index === i) {
          let expenseName = newNameEdit;
          let expenseAmount = newAmountEdit;
          const newExpense = { expenseName, expenseAmount, edit: true };

          return newExpense;
        }

        return item;
      });

      setExpenses(newList);
      setNewNameEdit("");
      setNewAmountEdit("");
    } else {
      console.log("You have put in invalid info.");
    }
    console.log(index);
  };

  const handleClear = (event) => {
    setExpenses([]);
  };

  const changeEditing = (index) => {
    console.log(index);

    const newList = expenses.map((item, i) => {
      if (i === index) {
        const updatedItem = {
          ...item,
          edit: !item.edit,
        };

        return updatedItem;
      }

      return item;
    });

    setExpenses(newList);

    // const newList = expenses.map((item, i) => {
    //   if (index == i) {
    //     console.log("Hallallerr");
    //     // setEditing(!editing);
    //     return item;
    //   }
    // });
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
        <ExpenseList
          expenses={expenses}
          handleRemove={handleRemove}
          handleClear={handleClear}
          editing={editing}
          changeEditing={changeEditing}
          handleEditForm={handleEditForm}
          newAmountEdit={newAmountEdit}
          newNameEdit={newNameEdit}
          handleNewExpenseAmount={handleNewExpenseAmount}
          handleNewExpenseName={handleNewExpenseName}
        />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
