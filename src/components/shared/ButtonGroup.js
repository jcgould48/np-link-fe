// import React from "react";
// import PropTypes from "prop-types";
// import classnames from "classnames";
// import Button from '@material-ui/core/Button';
// export default function ButtonGroup({
//   variant,
//   color,
//   buttonStyle,
//   title,
//   disabled,
//   component,
//   onClick = null,
//   style = null,
// }) {
//   return (
//     <Button
//       className={classnames(`${buttonStyle}`, {
//         "form-button-valid filled": disabled !== true ? true : false,
//       })}
//       variant={variant}
//       color={color}
//       style={style}
//       disabled={disabled}
//       onClick={onClick}
//       component={component}

//     >
//       {title}
//     </Button>
//   );
// }

// ButtonGroup.propTypes = {
//   buttonStyle: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   disabled: PropTypes.bool.isRequired,
// };
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function ButtonGroup({
  buttonStyle,
  title,
  disabled,
  onClick = null,
  style = null,
}) {
  return (
    <button
      className={classnames(`${buttonStyle}`, {
        "form-button-valid filled": disabled !== true ? true : false,
      })}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

ButtonGroup.propTypes = {
  buttonStyle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
