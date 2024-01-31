import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

interface MenuItemProps {
  label: string;
}

export function MenuItem({ label }: MenuItemProps) {
  const { ref, focused } = useFocusable();

  const menuItemBoxClass = 'w-171 h-51 bg-purple-500 border-white border-solid border-0 box-border rounded-7 flex items-center justify-center mb-8';
  const menuItemBoxFocusedClass = 'bg-gray-400';

  return (
    <div className={focused ? menuItemBoxFocusedClass : menuItemBoxClass} ref={ref} data-testid="menu-item">
      {label}
    </div>
  );
}
