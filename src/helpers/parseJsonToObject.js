const parseJsonToObject = (jsonString) => {
  try {
    if (jsonString) {
      return JSON.parse(jsonString);
    }
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default parseJsonToObject;
