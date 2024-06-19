// pasar de JSON a objeto JavaScript para guardar donde se requiera en la app
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
