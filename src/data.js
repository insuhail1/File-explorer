export const defaultData = [
  { id: 1, name: "README.md" },
  {
    id: 2,
    name: "src",
    children: [
      { id: 3, name: "App.jsx" },
      { id: 4, name: "index.css" },
      {
        id: 5,
        name: "assets",
        children: [
          {
            id: 6,
            name: "react.svg",
          },
        ],
      },
      {
        id: 7,
        name: "public",
        children: [],
      },
    ],
  },
];
