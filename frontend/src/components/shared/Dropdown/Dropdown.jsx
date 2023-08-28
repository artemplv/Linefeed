import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/shared/Icon';

function Dropdown(props) {
  const {
    open,
    toggle,
    triggerElement,
    children,
    menuStickTo,
  } = props;

  return (
    <div className="dropdown">
      <div className="trigger-container">
        <button
          type="button"
          className="trigger-button"
          onClick={toggle}
        >
          {triggerElement}
          <Icon
            name="chevron-down"
            className="svg-baseline"
          />
        </button>
        {
          open && (
            <div className={`dropdown-menu stick-${menuStickTo}`}>
              {children}
            </div>
          )
        }
      </div>
    </div>
  );
}

Dropdown.defaultProps = {
  menuStickTo: 'left',
  children: null,
};

Dropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  triggerElement: PropTypes.element.isRequired,
  children: PropTypes.node,
  menuStickTo: PropTypes.oneOf(['left', 'right']),
};

export default Dropdown;
