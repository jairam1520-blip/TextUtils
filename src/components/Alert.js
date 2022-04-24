import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    let lCase = word.toLowerCase();
    return lCase.charAt(0).toUpperCase() + lCase.slice(1);
  };
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
