const removeTags = (text: string = "") => {
  const cleanText = text.replace(/\<(.+?)\>/g, "");

  return cleanText;
};

export { removeTags };
