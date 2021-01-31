import React from 'react';
import { motion } from 'framer-motion';
import loadingHelper from './helpers';

const MxmLoading = () => (
  <motion.div
    style={loadingHelper.Container}
    variants={loadingHelper.ContainerVariants}
    initial="start"
    animate="end"
  >
    <motion.span
      style={loadingHelper.pinkCircle}
      variants={loadingHelper.CircleVariants}
      transition={loadingHelper.CircleTransition}
    />
    <motion.span
      style={loadingHelper.yellowCircle}
      variants={loadingHelper.CircleVariants}
      transition={loadingHelper.CircleTransition}
    />
    <motion.span
      style={loadingHelper.navyCircle}
      variants={loadingHelper.CircleVariants}
      transition={loadingHelper.CircleTransition}
    />
    <motion.span
      style={loadingHelper.cyanCircle}
      variants={loadingHelper.CircleVariants}
      transition={loadingHelper.CircleTransition}
    />
  </motion.div>
);

export default MxmLoading;
