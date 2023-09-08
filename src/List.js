import { useState } from "react";

const List = ({ items }) => {
  const newItems = items.map((box) => ({ ...box, selected: false }));
  const [boxes, setBoxes] = useState(newItems);

  return (
    <div>
      <ul className="List">
        {[...boxes.sort((a, b) => (a.selected ? -1 : 1))].map((item) => {
          return (
            <li
              onClick={() => {
                const newArrBoxes = [...boxes];
                const idx = newArrBoxes.findIndex(
                  (box) => box.name === item.name
                );
                newArrBoxes[idx].selected = !newArrBoxes[idx].selected;
                setBoxes(newArrBoxes);
              }}
              key={item.name}
              className={`List__item List__item--${item.color}  ${
                item.selected && "List__item--selected"
              }`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
