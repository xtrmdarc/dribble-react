
const backendApi = (() => {
  const domain = 'https://xtrmdarc-behance-backend-api.herokuapp.com';

  const getProjects = async () => {
    const url = `${domain}/projects`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  return { getProjects };
})();

export default backendApi;
