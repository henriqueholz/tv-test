import React from 'react';
import {
  FocusContext,
  setFocus,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { Link } from 'react-router-dom';

const FocusButton: React.FC<any> = ({
  className = '',
  onClick,
  children,
  focusKey: focusKeyParam,
  onArrowPress,
  onFocus,
  to,
  onEnterPress,
  focusedClassName = '',
}) => {
  const { ref, focused, focusKey } = useFocusable({
    onEnterPress,
    focusKey: focusKeyParam,
    onArrowPress,
    onFocus,
  });

  const handleMouseOver = () => {
    setFocus(focusKey);
  };

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} onMouseOver={handleMouseOver} onClick={handleButtonClick}>
        <div className={focused ? focusedClassName : className}>
          <Link to={to}>{children}</Link>
        </div>
      </div>
    </FocusContext.Provider>
  );
};

export default FocusButton;
