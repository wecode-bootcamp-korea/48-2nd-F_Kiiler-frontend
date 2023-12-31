import React from 'react';
import './SelectItem.scss';

const SelectItem = ({
  size,
  price,
  isSelected,
  isPurchaseSize,
  handleClick,
}) => {
  return (
    <li className="selectItem">
      <button
        className={`sizeSelectBtn ${isSelected ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        <p className="size">{size}</p>
        {price !== null ? (
          <p className="price small">{Number(price).toLocaleString()}</p>
        ) : (
          <p className="bid small">{isPurchaseSize ? '구매' : '판매'} 입찰</p>
        )}
      </button>
    </li>
  );
};

export default SelectItem;
