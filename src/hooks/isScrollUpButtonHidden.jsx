import { useState, useEffect } from 'react';

export default function useHideNavSocials(homepageHeroRef) {
  const [isScrollUpButtonHidden, toggleIsScrollUpButtonHidden] = useState(true);

  useEffect(() => {
    if (homepageHeroRef?.current) {
      const options = {
        rootMargin: `-25%`,
      };

      const observer = new IntersectionObserver(([entry]) => {
        toggleIsScrollUpButtonHidden(entry.isIntersecting);
      }, options);

      observer.observe(homepageHeroRef.current);

      return () => {
        observer.disconnect();
        toggleIsScrollUpButtonHidden(false);
      };
    }

    return null;
  }, [homepageHeroRef]);

  return isScrollUpButtonHidden;
}
