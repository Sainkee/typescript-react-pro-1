import { useCallback, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onselect: (items: string) => void;
}
function ListGroup({ items, heading, onselect }: ListGroupProps) {
  //  useState hook as a function it have data will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No Value Found</p>}
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onselect(item);
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
