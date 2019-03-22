import React from 'react';

import { StyledButton, Spinner } from './styled';
import { Tchildren, TclickHandler, TisLoading, Tprimary } from './types';

interface Props {
  children: Tchildren;
  clickHandler: TclickHandler;
  isLoading: TisLoading;
  primary?: Tprimary;
}

const createSpinner = (primary: Tprimary): JSX.Element => (
  <Spinner size={15} thickness={5} {...{ primary }} />
);

const Button = (props): JSX.Element => {
  const { children, clickHandler, isLoading, ...passedProps } = props;

  const content = isLoading ? createSpinner(passedProps.primary) : children;

  return (
    <StyledButton
      onClick={clickHandler}
      variant={passedProps.primary ? 'contained' : 'outlined'}
      {...passedProps}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
