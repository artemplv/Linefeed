import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'rc-notification';

import Icon from 'components/shared/Icon';

const variantIcons = {
  error: {
    name: 'alert-circle',
    color: 'error',
  },
  success: {
    name: 'check-circle',
    color: 'success',
  },
};

function Alert(props) {
  const {
    variant,
    message,
  } = props;

  return (
    <div className={`alert-box alert-${variant}`}>
      <div className="alert-content">
        <Icon
          name={variantIcons[variant].name}
        />

        <p>
          {message}
        </p>
      </div>
    </div>
  );
}

const call = (content, variant) => {
  Notification.newInstance({ style: { top: 65 } }, (n) => {
    n.notice({
      content: (
        <Alert
          variant={variant}
          message={content}
        />
      ),
    });

    setTimeout(() => {
      n.destroy();
    }, 2000);
  });
};

const callAlert = {
  error: (content) => {
    call(content, 'error');
  },
  success: (content) => {
    call(content, 'success');
  },
};

Alert.defaultProps = {
  variant: 'success',
  message: 'Alert text',
};

const {
  oneOf,
  string,
} = PropTypes;

Alert.propTypes = {
  variant: oneOf([
    'error',
    'success',
  ]),
  message: string,
};

export {
  Alert,
  callAlert,
};
