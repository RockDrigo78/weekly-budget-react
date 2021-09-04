import React, { Fragment } from "react";
import { checkBudget } from "../helpers";
import PropTypes from "prop-types";

const BudgetControl = ({ budget, budgetLeft }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">Budget: $ {budget}</div>
            <div className={checkBudget(budget, budgetLeft)}>
                Left: $ {budgetLeft}
            </div>
        </Fragment>
    );
};

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    budgetLeft: PropTypes.number.isRequired,
};

export default BudgetControl;
