'use strict'

/**
 * useNearScreen is a custom hook that tells you if the element is 
 * inside the viewport and should be shown.
 * 
 * @return: show, true if the element is inside the viewport false otherwise
 * @return: element, a reference to an html element
*/

import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(function () {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(element.current);

  }, [element])

  return [show, element]
}