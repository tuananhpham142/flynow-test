import { RefObject, useState, useEffect } from 'react';

export const useOnScreen = (ref: RefObject<HTMLElement>, rootMargin = '0px') => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { rootMargin });

        const currentElement = ref.current as HTMLElement;
        if (ref.current) {
            observer.observe(currentElement);
        }
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return isVisible;
};
