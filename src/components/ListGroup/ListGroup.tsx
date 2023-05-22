import MouseEvent, { useState } from "react";
import styled from "styled-components";

//this is a styling component
// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

interface ListGroupProp {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProp) {
  //Event handled
  //const handleClick = (event: MouseEvent) => console.log(event);

  const [indexSelected, setIndexSelected] = useState(-1);

  return (
    //this is a React.Fragment Element to not create an extra container into the component
    <>
      <h1>{heading}</h1>

      {/* this will return the '<p></p>' element in case the first condition is true */}
      {items.length === 0 && <p>No cities found</p>}

      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              indexSelected == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setIndexSelected(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
