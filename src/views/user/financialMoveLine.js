import React, {PropTypes} from 'react';

function FinancialMoveLine({onClick, children, fieldForLine, options,index,  ...otherProps}) {
  console.log(otherProps)
    return (
    <div>
        <div>  {fieldForLine('transactionType', {entityPath: 'financialMove', label:'lala', editing: false})} </div>
        <div>  {fieldForLine('amount', {entityPath: 'financialMove'})}  </div>
    </div>
  );
}


FinancialMoveLine.displayName = 'financialMoveLine';
FinancialMoveLine.propTypes = {
    onClick: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string)
};
FinancialMoveLine.defaultProps = {
    options: []
}
export default FinancialMoveLine;
