import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

const MotionProvider = ({ children }: { children: ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);

export default MotionProvider;
