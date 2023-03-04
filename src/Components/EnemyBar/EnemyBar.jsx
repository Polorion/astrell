import * as React from "react";
import S from "./EnemyBar.module.scss";
import Board from "../Board/Board";
import SpellElement from "../CardBar/SpellElement/SpellElement";
import { ReactComponent as Fire } from "../../access/img/fireIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../MyButton/MyButton";
import { ReactComponent as Next } from "../../access/img/next.svg";
import { ReactComponent as Burger } from "../../access/img/burger.svg";
import { setAnimation } from "../../store/redux/PlayerSlice";
import { useEffect } from "react";

const EnemyBar = ({ enemy, owner }) => {
  const dispatch = useDispatch();
  const allCard = useSelector((state) => state.player.board);
  const timeAttack = allCard.filter((el) => el.isBusy);
  const handler = () => {
    owner.board.map((el) => {
      if (el.isAttack === false && el.isBusy !== null) {
        dispatch(setAnimation({ id: el.id, type: true }));
      }
      setTimeout(() => {
        dispatch(setAnimation({ id: el.id, type: false }));
      }, timeAttack.length * 1000);
    });
  };
  return (
    <div>
      <div className={S.body}>
        <div className={S.avatar}>
          <img src={owner.avatar} alt="" />
          <p>{owner.name}</p>
        </div>

        <div className={S.boardBody}>
          <div className={S.controlBtn}>
            {!enemy && <MyButton Img={Next} action={handler} />}{" "}
            {!enemy && <MyButton Img={Burger} />}
          </div>

          <div className={S.board}>
            <div className={S.enemyMagick}>
              {enemy &&
                owner.bookMana.map((element) => {
                  return (
                    <SpellElement
                      enemy={enemy}
                      key={element.name}
                      Element={Fire}
                      name={""}
                      mana={element.count}
                    />
                  );
                })}
            </div>

            <Board enemy={enemy} board={owner.board} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnemyBar;
