import { useEffect } from 'react';
export const useOutside = (ref, onClickOut, enable = true) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (enable) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOut();
        }
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [ref, enable, onClickOut]);
};
