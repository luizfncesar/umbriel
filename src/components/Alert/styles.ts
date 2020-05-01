import styled, { css } from 'styled-components';

interface WrapperProps {
  backgroundColor?: string;
  borderColor?: string;
  type: 'success' | 'danger' | 'info' | 'warning';
}

interface TextProps {
  textColor?: string;
  type: 'success' | 'danger' | 'info' | 'warning';
}

export const Wrapper = styled.div<WrapperProps>`
  display: block;
  width: 90%;
  padding: 0.75rem 1.25rem;
  margin: 1.6rem auto;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  ${(props) => {
    switch (props.type) {
      case 'success':
        return css`
          background-color: #d4edda;
          border-color: #c3e6cb;
        `;

      case 'warning':
        return css`
          background-color: #fff3cd;
          border-color: #ffeeba;
        `;

      case 'danger':
        return css`
          background-color: #f8d7da;
          border-color: #f5c6cb;
        `;

      default:
        return css`
          background-color: ${props.backgroundColor || '#cce5ff'};
          border-color: ${props.borderColor || '#b8daff'};
        `;
    }
  }}
`;

export const Text = styled.p<TextProps>`
  font-size: 1.6rem;

  ${(props) => {
    switch (props.type) {
      case 'success':
        return css`
          color: #155724;
        `;

      case 'warning':
        return css`
          color: #856404;
        `;

      case 'danger':
        return css`
          color: #721c24;
        `;

      default:
        return css`
          color: ${props.textColor || '#004085'};
        `;
    }
  }}
`;
