import { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import './FilteringCategory.scss';

const FilteringCategory = ({ checkedFilterItem, setCheckedFilterItem }) => {
  const [openCategoryList, setOpenCategoryList] = useState([]);

  const handlerFilterTitle = index => {
    setOpenCategoryList(prev => {
      if (prev.includes(index)) {
        return prev.filter(item => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const onClickMenu = filterItem => {
    if (checkedFilterItem.includes(filterItem)) {
      setCheckedFilterItem(prevCheckedFilterItem =>
        prevCheckedFilterItem.filter(item => filterItem !== item),
      );
    } else {
      setCheckedFilterItem(prevCheckedFilterItem => [
        ...prevCheckedFilterItem,
        filterItem,
      ]);
    }
  };

  const deleteFilter = () => {
    setCheckedFilterItem([]);
  };

  return (
    <div className="filteringCategory scroll">
      <div className="filterStatus">
        <div className="statusBox">
          <div className="statusText">필터</div>
          {checkedFilterItem.length ? (
            <div className="statusNum">{checkedFilterItem.length}</div>
          ) : null}
        </div>
        <div className="deleteFilterButton" onClick={deleteFilter}>
          초기화
        </div>
      </div>
      <div className="filterExpress">
        <img src="/images/expressThunder.PNG" />
        <div className="filterExpressText">빠른배송</div>
      </div>

      {filterListData.map((data, index) => (
        <FilterList
          key={index}
          mainTitle={data['mainTitle']}
          placeholder={data['placeholder']}
          filterItems={data['filterItems']}
          openCategoryList={openCategoryList.includes(index)}
          handlerFilterTitle={() => handlerFilterTitle(index)}
          checkedFilterItem={checkedFilterItem}
          onClickMenu={onClickMenu}
        />
      ))}
    </div>
  );
};

export default FilteringCategory;

const FilterList = ({
  mainTitle,
  placeholder,
  filterItems,
  openCategoryList,
  handlerFilterTitle,
  checkedFilterItem,
  onClickMenu,
}) => {
  return (
    <div className="filterList">
      <div className="filterTitle" onClick={handlerFilterTitle}>
        <div className="titleBox">
          <div className="mainTitle">{mainTitle}</div>
          {!openCategoryList && (
            <div className="placeholder">{placeholder}</div>
          )}
        </div>
        <div className="plusBox">
          {openCategoryList ? <BiMinus /> : <BsPlusLg />}
        </div>
      </div>
      {openCategoryList && (
        <div className="filterMenu">
          {filterItems.map((item, index) => (
            <div key={index} className="menu" onClick={() => onClickMenu(item)}>
              {checkedFilterItem.includes(item) ? (
                <MdCheckBox className={'CheckedFalse'} />
              ) : (
                <MdCheckBoxOutlineBlank className={'CheckedTrue'} />
              )}
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const filterListData = [
  {
    mainTitle: '신발',
    placeholder: '모든 신발',
    filterItems: ['스니커즈', '슬리퍼/샌달'],
  },
  {
    mainTitle: '브랜드',
    placeholder: '모든 브랜드',
    filterItems: ['Adidas', 'Nike', 'New Balance'],
  },
  {
    mainTitle: '성별',
    placeholder: '모든 성별',
    filterItems: ['남성', '여성', '키즈'],
  },
  {
    mainTitle: '컬렉션',
    placeholder: '모든 컬렉션',
    filterItems: [
      'Luxury',
      'Contemporary',
      'Jordan 1',
      'Jordan 3',
      'Jordan 4',
      'Jordan 5',
      'Jordan 6',
      'Jordan 11',
      'Nike Dunk',
      'Nike Air Force',
      'Nike Air Max 1',
      'Nike Air Max 95',
    ],
  },
];
