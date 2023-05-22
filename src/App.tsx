import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissAlert from "./components/DismissAlert";
import ListGroup from "./components/ListGroup/ListGroup";
import { produce } from "immer";
import ExpandText from "./components/ExpandText/ExpandText";
import Form from "./components/Form/Form";
import FormUseState from "./components/Form/FormUseState";
import FormWithReactHook from "./components/Form/FormWithReactHook";
import FormWithReactHookValidationFields from "./components/Form/FormWithReactHookValidationFields";
import FormWithReactHookValidationFieldsZod from "./components/Form/FormWithReactHookValidationFieldsZod";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseForm/ExpenseList";
import ExpenseFilter from "./components/ExpenseForm/ExpenseFilter";
import UseEffect from "./components/useEffect/UseEffect";
import UseEffectDependency from "./components/useEffect/UseEffectDependency";
import FetchingWithAxios from "./components/FetchingData/FetchingWithAxios";

function App() {
  const cities = [
    "San Francisco",
    "Los Angeles",
    "Paris",
    "New york",
    "New orleans",
  ];

  const [game, setGame] = useState({
    game: "My game",
    id: 1,
    player: {
      name: "Charlie",
    },
  });

  const [pizza, setPizza] = useState({
    name: "My game",
    topings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        quantity: 1,
      },
    ],
  });

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "ccc",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 10,
      category: "Utilities",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((item) => item.category === selectedCategory)
    : expenses;

  const onClickgame = () => {
    //updating with spread operator (...)
    setGame({ ...game, player: { ...game.player, name: "Cesarin" } });

    //uopdating with immer
    // setGame(
    //   produce((draft) => {
    //     draft.player.name = "Cesarin";
    //   })
    // );
  };

  const onClickPizza = () => {
    setPizza({ ...pizza, topings: [...pizza.topings, "More cheese!"] });
  };

  const onClickCart = () => {
    //setCart({...cart, items: [...cart.items, {...cart.items.find(e => e.id == 1), quantity: 2}]})

    //uopdating with immer
    setCart(
      produce((draft) => {
        const item = draft.items.find((e) => e.id == 1);
        if (item) item.quantity = 2;
      })
    );
  };

  const handleSelectItem = (item: string) => console.log(item);

  const [alertVisible, setAlertVisibility] = useState(false);

  const [categoryEffectHook, setCategoryEffectHook] = useState<string>("");

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities of the world"
        onSelectItem={handleSelectItem}
      />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <Alert>
        Hey!
        <p>This is my children</p>
      </Alert>

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      {alertVisible && (
        <DismissAlert onClose={() => setAlertVisibility(false)} />
      )}

      <Button
        color="danger"
        text="My Button"
        onClick={() => setAlertVisibility(true)}
      />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <label>{game.player.name}</label>
      <button className="btn btn-primary" onClick={onClickgame}>
        This is the game button
      </button>

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <ul>
        {pizza.topings.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={onClickPizza}>
        This is the pizza button
      </button>

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <label>{cart.items[0].quantity}</label>
      <button className="btn btn-primary" onClick={onClickCart}>
        This is the cart button
      </button>

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <ExpandText maxChars={10}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
        blanditiis commodi id exercitationem. Error blanditiis aliquid earum
        quos aspernatur nam possimus perferendis velit quia iusto sapiente,
        dicta alias voluptatibus culpa expedita magni fugit repellendus laborum
        vitae sunt provident atque! Eum sint dicta quidem minus voluptatum
        numquam delectus, eaque, itaque enim veritatis, obcaecati ut corporis
        iste ex debitis qui! Veniam temporibus eum, amet dolorum quos eaque
        repellendus similique non assumenda nostrum maxime alias aliquam ullam!
        Veniam voluptatem laborum saepe! Blanditiis eum soluta, dolore
        distinctio cum eveniet accusamus obcaecati fugit ab quaerat sequi
        corporis laudantium corrupti id cumque et voluptatibus sed sapiente.
      </ExpandText>

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <Form />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <FormUseState />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <FormWithReactHook />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <FormWithReactHookValidationFields />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <FormWithReactHookValidationFieldsZod />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((element) => element.id !== id))
        }
      />

      <UseEffect />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <select onChange={(event) => setCategoryEffectHook(event.target.value)}>
        <option value="">Select a value</option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
      <UseEffectDependency category={categoryEffectHook} />

      <hr
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          border: "0",
          borderTop: "3px solid rgba(0, 0, 0)",
        }}
      />

      <FetchingWithAxios />
    </div>
  );
}

export default App;
