import React from 'react';

// React Bootstrap
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
