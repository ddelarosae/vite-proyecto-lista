const colors = ['red', 'green', 'blue', 'gray', 'yellow'];
const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const fruits = ['apple', 'banana', 'kiwi', 'pear', 'mango'];
const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          []
        ),
      ],
      []
    ),
  ],
  []
);
export { items };
