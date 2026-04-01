function drawDonut(ctx, w, h, segmentsData, progress) {
  // Erase previous frame
  ctx.clearRect(0, 0, w, h);

  // Center points
  const cx = w / 2;
  const cy = h / 2;

  // Radius + padding
  const r = (Math.min(w, h) / 2) * 0.85;

  // Ring thickness
  const outerStrokeWidth = r * 0.3;
  const innerStrokeWidth = outerStrokeWidth * 0.4;
  const innerR = r - (outerStrokeWidth - innerStrokeWidth) / 2;

  const total = segmentsData.reduce((s, b) => s + b.maximum, 0);

  let angle = -Math.PI / 2;
  // Track how much of the total 1.0 progress we've "used"
  let accumulatedProgress = 0;

  segmentsData.forEach(({ maximum, theme }) => {
    
    // Convert value to angle in radian
    const allocatedAngle = (maximum / total) * Math.PI * 2;

    // Calculate the percentage of the total circle this segment represents (0.0 to 1.0)
    const segmentWeight = maximum / total;

    // Determine this segment's local progress based on the global progress
    let localProgress = 0;
    if (progress > accumulatedProgress) {
      localProgress = Math.min(
        (progress - accumulatedProgress) / segmentWeight,
        1,
      );
    }

    // Only draw if this segment has started animating
    if (localProgress > 0) {
      ctx.lineWidth = outerStrokeWidth;
      ctx.lineCap = "butt";

      // 1. Outer Arc
      ctx.beginPath();
      ctx.arc(cx, cy, r, angle, angle + allocatedAngle * localProgress);
      ctx.strokeStyle = theme;
      ctx.stroke();

      // 2. Inner Arc
      ctx.beginPath();
      ctx.save();
      ctx.globalAlpha = 0.2; // Make inner arc transparent
      ctx.lineWidth = innerStrokeWidth;
      ctx.strokeStyle = "#fff";
      ctx.arc(cx, cy, innerR, angle, angle + allocatedAngle * localProgress);
      ctx.stroke();
      ctx.restore();
    }

    angle += allocatedAngle;

    // Move the threshold for the next segment
    accumulatedProgress += segmentWeight;
  });
}

export { drawDonut };
