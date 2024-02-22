import { useEffect } from 'react';
import { useMenuPage } from '../store/pageStore';

export default function News() {
  const updateHeaderPage = useMenuPage((state: any) => state.updateHeaderPage);

  useEffect(() => {
    updateHeaderPage('HEADER_NEWS');
  }, []);

  return (
    <div>
      <div>news</div>
    </div>
  );
}
