import React from "react";
import { SortObj } from "../App";

type SortProps = {
  sortType: SortObj;
  onChangeSort: (i: SortObj) => void;
};

const Sort: React.FC<SortProps> = ({ sortType, onChangeSort }) => {
  const [openPopup, setOpenPopup] = React.useState(false);

  const itemsPopup = [
    { name: "Имя А-Я", sortProperty: "firstname" },
    { name: "Имя Я-А", sortProperty: "-firstname" },
    { name: "Сначала моложе", sortProperty: "age" },
    { name: "Сначала старше", sortProperty: "-age" },
  ];

  const onClickOpen = () => {
    setOpenPopup(!openPopup);
  };

  const onCLickActivePopup = (i: SortObj) => {
    onChangeSort(i);
    setOpenPopup(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <span
          onClick={() => {
            onClickOpen();
          }}
        >
          {sortType.name}
        </span>
        <img
          onClick={() => {
            onClickOpen();
          }}
          src="/img/sort.svg"
          width={20}
          height={20}
        />
      </div>
      {openPopup && (
        <div className="sort__popup">
          <ul>
            {itemsPopup.map((obj, i) => {
              const isSelected = sortType.sortProperty === obj.sortProperty;
              return (
                <li
                  key={i}
                  className={isSelected ? "active" : ""}
                  onClick={() => onCLickActivePopup(obj)}
                >
                  {obj.name}
                  {isSelected && (
                    <img src="./img/selected_sort.svg" height={18} width={18} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Sort;
