import * as React from "react";
import S from "./Board.module.scss";
import stub from "../../access/img/zaglushka.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setCardInBoard } from "../../store/redux/PlayerSlice";
import { setActiveCard } from "../../store/redux/SpellBookSlice";
import { useEffect, useState } from "react";
const Board = ({ board, enemy }) => {
  const activeCard = useSelector((state) => state.spellBook.choiceCard);
  const dispatch = useDispatch();

  const handler = (id) => {
    dispatch(setCardInBoard({ id, activeCard }));
    dispatch(setActiveCard(null));
  };
  let timeAttack = 0;
  return (
    <div className={S.body}>
      {board.map((el, i) => {
        if (!el.isBusy) {
          timeAttack += 1;
          return (
            <div
              key={Math.random()}
              className={S.slot}
              onClick={() => {
                !enemy && handler(el.id);
              }}
            >
              <img className={S.oneBG} src={stub} alt="" />
              <div className={S.empty}>Слот{el.id}</div>
            </div>
          );
        } else {
          return (
            <Slot
              key={Math.random()}
              el={el}
              isAttack={el.isAttack}
              i={i - timeAttack}
            />
          );
        }
      })}
    </div>
  );
};

export default React.memo(Board);

const Slot = React.memo(({ el, isAttack, i }) => {
  const [a, aa] = useState(false);
  setTimeout(() => {
    isAttack && aa(true);
  }, 1000 * i);
  console.log(el.id);
  if (isAttack) {
    setTimeout(() => {}, 10000 * i);
  }

  return (
    <div className={`${S.slot} ${a && S.go} `}>
      <img className={S.twoBG} src={el.isBusy.img} alt="" />
      <div className={`${S.hp} ${S.box}`}>{el.isBusy.hp}</div>
      <div className={`${S.damage} ${S.box}`}>{el.isBusy.attack}</div>
      <div className={`${S.mana} ${S.box}`}>{el.isBusy.price}</div>
    </div>
  );
});
