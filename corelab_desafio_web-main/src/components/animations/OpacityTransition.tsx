import { MotionProps, motion } from 'framer-motion';

interface OpacityTransitionProps extends MotionProps {
  className?: string;
}

export const OpacityTransition = ({
  children,
  className,
  ...props
}: OpacityTransitionProps) => {
  return (
    <motion.div
      {...props}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};
