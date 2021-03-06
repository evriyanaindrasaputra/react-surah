import React from 'react'
import { ArrowUpIcon } from '@heroicons/react/solid'
import { classNames } from '~/lib/class-utils';
const Scroll: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  function scrollToTop() {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  };


  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  return (
    <>
      <button
        aria-label='button scroll to top'
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default',
          'fixed transition-opacity bottom-20 right-8 w-10 h-10 shadow-lg rounded-full p-2'
        )}
      >
        <ArrowUpIcon />
      </button>
    </>
  )
}

export default Scroll
