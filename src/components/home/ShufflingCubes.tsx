import styles from './ShufflingCubes.module.css';

const ShufflingCubes = () => {
  // Total number of cubes (mix gold and white)
  const TOTAL = 48;

  const cubes = Array.from({ length: TOTAL }, (_, index) => {
    const isWhite = Math.random() > 0.5; // randomly choose color
    const size = Math.floor(28 + Math.random() * 40); // 28 - 68px
    const top = Math.floor(Math.random() * 90); // percent
    const left = Math.floor(Math.random() * 92);
    const duration = (isWhite ? 5 + Math.random() * 6 : 6 + Math.random() * 8).toFixed(2); // seconds
    const delay = (-Math.random() * 12).toFixed(2);

    const style: React.CSSProperties = {
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    };

    return (
      <div
        key={index}
        className={`${styles.cube} ${isWhite ? styles.glowCube : ''}`}
        style={style}
        aria-hidden
      >
        <div className={`${isWhite ? styles.glowCubeFace : styles.goldCubeFace} ${styles.front}`}></div>
        <div className={`${isWhite ? styles.glowCubeFace : styles.goldCubeFace} ${styles.back}`}></div>
        <div className={`${isWhite ? styles.glowCubeFace : styles.goldCubeFace} ${styles.right}`}></div>
        <div className={`${isWhite ? styles.glowCubeFace : styles.goldCubeFace} ${styles.left}`}></div>
        <div className={`${isWhite ? styles.glowCubeFace : styles.goldCubeFace} ${styles.top}`}></div>
        <div className={`${isWhite ? styles.glowCubeFace : styles.goldCubeFace} ${styles.bottom}`}></div>
      </div>
    );
  });

  return <div className={styles.cubeContainer} aria-hidden>{cubes}</div>;
};

export default ShufflingCubes;