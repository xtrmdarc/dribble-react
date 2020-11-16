
const backendApi = (() => {
  const domain = 'https://xtrmdarc-behance-backend-api.herokuapp.com';

  const getProjects = async () => {
    const url = `${domain}/projects`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const getProjectsByQuery = async (query) => {
    const url = `${domain}/projects/search?query=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const getCategories = async () => {
    const url = `${domain}/categories`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);  
    return data;
  };

  return { getProjects, getProjectsByQuery, getCategories, domain };
})();

export default backendApi;
