import { drawDonut } from "../../utils/drawDonut";
import { useRef, useEffect } from "react";

const DonutChart = ({
  segmentsData,
  containerClassName,
  canvasClassName,
  children,
}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = 0,
      h = 0;

    function animate() {
      drawDonut(ctx, w, h, segmentsData, progressRef.current);
      if (progressRef.current < 1) {
        progressRef.current = Math.min(progressRef.current + 0.025, 1);
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      w = width;
      h = height;
      cancelAnimationFrame(rafRef.current);
      progressRef.current = 0;
      animate();
    });

    ro.observe(canvas);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [segmentsData]);

  return (
    <div className={`${containerClassName} flex justify-center items-center`}>
      <div className="relative w-fit">
        <canvas ref={canvasRef} className={canvasClassName} />
        {children}
      </div>
    </div>
  );
};

export default DonutChart;
