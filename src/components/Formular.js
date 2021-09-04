import React, { useState } from "react";
import Error from "../components/Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formular = ({ addNewSpend, addCreateSpend }) => {
    const [spendName, addSpendName] = useState("");
    const [ammount, addAmmount] = useState(0);
    const [error, addError] = useState(false);

    const handleOnSubmit = (evt) => {
        evt.preventDefault();

        //validate
        if (ammount < 1 || isNaN(ammount) || spendName.trim() === "") {
            addError(true);
            return;
        }
        addError(false);

        //newSpend structure
        const newSpend = {
            spendName,
            ammount,
            id: shortid.generate(),
        };

        //pass spend to main component
        addNewSpend(newSpend);
        addCreateSpend(true);

        //reset form
        addSpendName("");
        addAmmount(0);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <h2>Add your spends here</h2>

            {error ? (
                <Error message="Both fields are mandatory or wrong ammount entered" />
            ) : null}

            <div className="campo">
                <label>Spend Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="spend name"
                    value={spendName}
                    onChange={(evt) => addSpendName(evt.target.value)}
                />
            </div>
            <div className="campo">
                <label>Ammount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="ammount"
                    value={ammount}
                    onChange={(evt) =>
                        addAmmount(parseInt(evt.target.value, 10))
                    }
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add spend"
            />
        </form>
    );
};

Formular.propTypes = {
    addNewSpend: PropTypes.func.isRequired,
    addCreateSpend: PropTypes.func.isRequired,
};

export default Formular;
