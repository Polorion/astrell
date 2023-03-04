import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../access/img/avatar.jpg";
import ragnaros from "../../access/img/cards/ragnaros.png";
const ComputerSlice = createSlice({
  name: "Computer",
  initialState: {
    name: "Computer",
    avatar: avatar,
    bookMana: [
      {
        name: "огонь",
        count: 5,
      },
      {
        name: "вода",
        count: 10,
      },
      {
        name: "земля",
        count: 10,
      },
    ],
    hp: 10,
    board: [
      {
        id: 1,
        isBusy: {
          name: "ragnaros",
          spell: null,
          attack: 10,
          price: 5,
          id: 1,
          hp: 10,
          img: ragnaros,
          description:
            "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
        },
      },
      {
        id: 2,
        isBusy: null,
      },
      {
        id: 3,
        isBusy: null,
      },
      {
        id: 4,
        isBusy: null,
      },
      {
        id: 5,
        isBusy: null,
      },
    ],
    attack: false,
  },
  reducers: {},
});

export const { setCardInBoard, setAnimation } = ComputerSlice.actions;
export default ComputerSlice.reducer;
