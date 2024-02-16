export const getPlatform = () => {
  const platform = window.navigator.userAgent;
  if (platform.includes('Tizen')) {
    return 'samsung';
  }
  if (platform.includes('SmartCast')) {
    return 'vizio';
  }
  if (platform.includes('SmartTV')) {
    return 'webos';
  }
  return 'samsung'; // default to samsung
};
