import React from "react";
import InvestmentImage from './InvestmentImage';
import InvestmentDate from './InvestmentDate';

function InvestmentItem(props) {
  const { name, photo, date, supply, price } = props;

  return (
    <div className="investment-item">
      <InvestmentImage img={photo} />
      <div className="details">
        <div className="name">{name}</div>
        <InvestmentDate date={date} />
        <div className="supply">Supply: {supply}</div>
      </div>
      <div className="price">${price}</div>
    </div>
  );
}

export default InvestmentItem;

    