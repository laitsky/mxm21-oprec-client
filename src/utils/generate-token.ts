export const generateToken = () =>
  Math.random().toString(36).slice(-6);
