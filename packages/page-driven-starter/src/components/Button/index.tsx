import React, { Component } from 'react';

import { Tchildren, Tprimary, Ttheme, TautoLoading, TisLoading } from './types';
import Markup from './Markup';

interface Props {
  children: Tchildren;
  primary?: Tprimary;
  size?: Tsize;
  theme?: Ttheme;
  autoLoading?: TautoLoading;
  loading?: TisLoading;
}

interface State {
  isLoading: TisLoading;
}

/**
 * Project level button with branding applied. It is recommended to use this component instead of
 * the raw Material-UI Button component.
 */
class Onboarding extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  /**
   * Sets state of `isLoading` to true if `isLoading` is not forced by passing `isLoading` as a prop
   * to this component.
   */
  clickHandler = () => {
    const { autoLoading } = this.props;

    if (!autoLoading) {
      return null;
    }

    return this.setState({ isLoading: true });
  };

  render(): JSX.Element {
    const { state, props, ...events } = this;
    const { loading } = props;
    const { isLoading, ...remainingState } = state;
    const computedIsLoading = props.autoLoading ? isLoading : loading;
    const passedProps = { ...remainingState, ...props, ...events, isLoading: computedIsLoading };

    return <Markup {...passedProps} />;
  }
}

export default Onboarding;
