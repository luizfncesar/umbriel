import React from 'react';

import { Wrapper, Text } from './styles';

interface AlertProps {
  text?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  type?: 'success' | 'danger' | 'info' | 'warning';
}

const Alert: React.FC<AlertProps> = ({
  children,
  text,
  backgroundColor,
  borderColor,
  textColor,
  type = 'info',
}) => {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      type={type}
    >
      {text ? (
        <Text textColor={textColor} type={type}>
          {text}
        </Text>
      ) : (
        children
      )}
    </Wrapper>
  );
};

export default Alert;
