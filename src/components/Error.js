import React from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => (
    <div>
        <p className="alert alert-danger error">{message}</p>
    </div>
);

Error.propTypes = {
    message: PropTypes.string.isRequired,
};
export default Error;
