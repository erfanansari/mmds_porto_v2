import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function SplineFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-white/20 border-t-brand-purple-light rounded-full animate-spin" />
    </div>
  );
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense fallback={<SplineFallback />}>
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} className={className} />
    </Suspense>
  );
}
