import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import SizeSelectItem from '../../components/SelectButton/SelectButton';
import './SizeSelect.scss';

const SizeSelect = () => {
  const [isSizeSelect, setIsSizeSelect] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/sizeSelectData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setIsSizeSelect(data);
      });
  }, []);

  return (
    <div className="sizeSelect">
      <HeaderTop />
      <HeaderMain />
      <div className="container">
        <div className="contentArea">
          <div className="tradeBefore">
            <div className="tradeBeforeCheck">
              <div className="productInfo">
                <div className="productThumb">
                  <div className="product">
                    <img src="../../images/shoe1.jpg" alt="shoes" />
                  </div>
                </div>
                <div className="productDetail">
                  <p className="code">CJ9179-200</p>
                  <p className="name">Nike Air Force 1 '07 WB Flex</p>
                  <p className="translatedName">
                    나이키 에어포스 1 '07 WB 플렉스
                  </p>
                  <div className="shippingExpress">빠른배송</div>
                </div>
              </div>

              <div className="tradeBeforeSelect">
                <div className="selectAreaMd">
                  <ul className="selectList">
                    {isSizeSelect.map(item => {
                      return (
                        <SizeSelectItem
                          key={item.key}
                          size={item.size}
                          price={item.price}
                          bid={item.bid}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className="tradeBtnArea">
                  <ul className="tradeButtons">
                    <li className="tradeButton">
                      <button
                        className="tradeNow"
                        onClick={() => {
                          navigate('/trade-option');
                        }}
                      >
                        <p className="tradePrice">100000</p>
                        <p className="tradeEspress fast">빠른 배송</p>
                      </button>
                    </li>
                    <li className="tradeButton">
                      <button
                        className="tradeBid"
                        onClick={() => {
                          navigate('/trade-option');
                        }}
                      >
                        <p className="tradePrice">100000</p>
                        <p className="tradeEspress">일반 배송</p>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SizeSelect;
