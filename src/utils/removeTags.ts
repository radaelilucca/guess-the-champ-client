const removeTags = (text = '') => {
  const cleanText = text.replace(/<(.+?)>/g, '');

  return cleanText;
};

export { removeTags };
