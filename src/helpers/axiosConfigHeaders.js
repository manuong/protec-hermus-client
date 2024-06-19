// para configurar los encabezados "headers" de la petición.
const axiosConfigHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export default axiosConfigHeaders;
