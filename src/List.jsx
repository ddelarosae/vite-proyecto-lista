import './App.css';
import { Fragment, useCallback, useEffect, useState } from 'react';
const List = ({ items }) => {
  const [selectedColorsList, setselectedColorsList] = useState([]);
  const onColorListSelectDiselect = useCallback((colorName, isSelect) => {
    if (isSelect) {
      setselectedColorsList((list) => [...list, colorName]);
    } else {
      const refinedList = selectedColorsList.filter(
        (color) => color !== colorName
      );
      setselectedColorsList(refinedList);
    }
  });
  console.log({ selectedColorsList });
  return (
    <Fragment>
      <SelectedItemsList list={selectedColorsList} />
      <ul className="List">
        {items.map((item) => (
          <ListItem
            key={item.name}
            item={item}
            onSelectionChange={onColorListSelectDiselect}
          />
        ))}
        ;
      </ul>
    </Fragment>
  );
};
const ListItem = ({ item: { name, color }, onSelectionChange }) => {
  const [isSelected, setIsSelect] = useState(false);
  const onSelChange = () => {
    setIsSelect((sel) => !sel);
  };
  useEffect(() => {
    onSelectionChange(name, isSelected);
  }, [isSelected]);
  return (
    <li
      onClick={onSelChange}
      className={`${
        isSelected ? 'seleccionado' : ''
      }List__item List__item--${color}`}
    >
      {name}
    </li>
  );
};

const SelectedItemsList = ({ list }) => {
  return (
    <div className="selected_items_list">
      {list.map((itemName, index, arr) => (
        <span className="selected_items_name">{itemName}</span>
      ))}
    </div>
  );
};

export default List;
