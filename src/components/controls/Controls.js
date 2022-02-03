import React from "react";
import PropTypes from "prop-types";

import { ControlsStyled } from "./ControlsStyled";

const Controls = ({ onClickAction }) => {
  return (
    <ControlsStyled>
      <h1 className="title">Please leave feedback</h1>
      <ul className="bt-list">
        <button
          type="button"
          name="good"
          className="bt-good"
          onClick={onClickAction}
        >
          good
        </button>
        <button
          type="button"
          name="neutral"
          className="bt-neutral"
          onClick={onClickAction}
        >
          neutral
        </button>
        <button
          type="button"
          name="negative"
          className="bt-bad"
          onClick={onClickAction}
        >
          bad
        </button>
      </ul>
    </ControlsStyled>
  );
};

Controls.propTypes = {
  onClickAction: PropTypes.func.isRequired,
};

export default Controls;
