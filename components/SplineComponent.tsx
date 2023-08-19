import Spline from "@splinetool/react-spline";

export interface SplineComponentProps {
  className?: string;
  scene?: string;
}

export default function SplineComponent({
  className,
  scene,
}: SplineComponentProps) {
  return <div className={className}>{scene && <Spline scene={scene} />}</div>;
}
