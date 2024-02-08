import React, { useRef } from 'react';
import {
  FocusContext,
  setFocus,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';

const FocusButton: React.FC<any> = ({
  theme: propsTheme = {},
  style = {},
  className = '',
  onClick,
  children,
  isActive,
  focusKey: focusKeyParam,
  onArrowPress,
  onFocus,
}) => {
  const { ref, focused, focusKey } = useFocusable({
    onEnterPress: onClick,
    focusKey: focusKeyParam,
    onArrowPress,
    onFocus,
  });

  const clickNode = useRef<HTMLButtonElement>(null);

  const handleMouseOver = () => {
    setFocus(focusKey);
  };

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div style={style} ref={ref} onMouseOver={handleMouseOver}>
        <button
          ref={clickNode}
          style={{ backgroundColor: focused ? 'red' : 'blue' }}
          onClick={handleButtonClick}
        >
          {children}
        </button>
      </div>
    </FocusContext.Provider>
  );
};

export default FocusButton;
