import { useEffect } from 'react';

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView(ref: React.RefObject<Element>, options: Options = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { root = null, rootMargin = '0px', threshold = 0.15, once = true } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            if (once && observer) observer.unobserve(entry.target);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, options]);
}
