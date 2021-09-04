import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Question = ({ addBudget, addBudgetLeft, updateShowQuestion }) => {
    const [ammount, addAmmount] = useState(0);
    const [error, changeError] = useState(false);

    const defineBudget = (evt) => {
        addAmmount(parseInt(evt.target.value, 10));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (ammount < 1 || isNaN(ammount)) {
            changeError(true);
            return;
        }
        changeError(false);

        addBudget(ammount);
        addBudgetLeft(ammount);
        updateShowQuestion(false);
    };

    return (
        <Fragment>
            <h2>Enter your Budget</h2>

            {error ? <Error message="There was an error" /> : null}

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Enter your budget please"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    placeholder="Define"
                />
            </form>
        </Fragment>
    );
};

Question.propTypes = {
    addBudget: PropTypes.func.isRequired,
    addBudgetLeft: PropTypes.func.isRequired,
    updateShowQuestion: PropTypes.func.isRequired,
};

export default Question;
