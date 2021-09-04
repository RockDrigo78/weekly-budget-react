import React from "react";
import PropTypes from "prop-types";

const Spend = ({ spend }) => {
    return (
        <li className="gastos">
            <p>
                {spend.spendName}
                <span className="gasto">$ {spend.ammount}</span>
            </p>
        </li>
    );
};

Spend.prototypes = {
    spend: PropTypes.object.isRequired,
};

export default Spend;
