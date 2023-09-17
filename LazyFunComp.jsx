import React from "react";
import { Suspense, lazy } from "react";
const Component1 = lazy(() => import("../LazyLoading/LazyLoadingEx"));

export const LazyFunComp = () => {
  return (
    <div>
      LazyFunComp
      <Suspense fallback={<div>Component1 is loading please wait </div>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<div>Component2 is loading please wait </div>}>
        <Component1 />
      </Suspense>
    </div>
  );
};
