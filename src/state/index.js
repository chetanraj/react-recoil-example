import { atom, selector } from "recoil";

export const nameStateAtom = atom({
  key: "nameStateAtom", // unique ID
  default: "", // default value
});

export const nameStateSelector = selector({
  key: "nameStateSelector", // unique ID
  get: ({ get }) => {
    const name = get(nameStateAtom);

    const prefix = ['super happy person 😁', 'joyful person 😂', `😇`];
    const r = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    console.log('r', r);

    return (name ? `${name} and I'm ${prefix[r]}` : '');
  },
});
