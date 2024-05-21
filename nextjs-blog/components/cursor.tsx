// components/CustomCursor.tsx
import { useEffect, useRef } from 'react';
import styles from '../styles/cursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `matrix(1, 0, 0, 1, ${e.clientX}, ${e.clientY})`;
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add(styles.customCursorActive);
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove(styles.customCursorActive);
      }
    };

    const handleImgMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add(styles.customCursorActiveImg);
      }
    };

    const handleImgMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove(styles.customCursorActiveImg);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    document.querySelectorAll('img').forEach(el => {
      el.addEventListener('mouseenter', handleImgMouseEnter);
      el.addEventListener('mouseleave', handleImgMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.querySelectorAll('img').forEach(el => {
        el.removeEventListener('mouseenter', handleImgMouseEnter);
        el.removeEventListener('mouseleave', handleImgMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className={styles.customCursor}><div className={styles.cursor}></div></div>;
};

export default CustomCursor;
