function InvestmentDate(props) {
    const formattedDate = new Date(props.date);
    const readableDate = `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;
  
    return (
      <div>{readableDate}</div>
    );
  }
  
  export default InvestmentDate;
  