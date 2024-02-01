import React from 'react';
import { FocusContext, init, useFocusable } from '@noriginmedia/norigin-spatial-navigation';

init({
  debug: false,
  visualDebug: false,
});

const FocusButton: React.FC<any> = ({
  onClick,
  focusKey: focusKeyParam,
  onArrowPress,
  children,
}) => {
  const { ref, focused, focusKey } = useFocusable({
    onEnterPress: onClick,
    focusKey: focusKeyParam,
    onArrowPress,
  });

  const className = focused ? "bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600" : "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <button 
          className={className}
          onClick={handleButtonClick}>
          {children}
        </button>
      </div>
    </FocusContext.Provider>
  );
};

export default FocusButton;
