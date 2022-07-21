import axios from 'axios'

export const getProyect = async () => {

  try {
    const URL = import.meta.env.VITE_URL_PROJECTS
    const TOKEN = import.meta.env.VITE_TOKEN
      const {data} = await axios(URL,  {
      "Content-Type": "application/json",
      headers: {
        "x-access-token": TOKEN
      },
    })
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getProyectById = async (id) => {

  try {
    const URL = import.meta.env.VITE_URL_PROJECTS
    const TOKEN = import.meta.env.VITE_TOKEN
      const {data} = await axios(`${URL}/${id}`,  {
      "Content-Type": "application/json",
      headers: {
        "x-access-token": TOKEN
      },
    })
    return data[0];
  } catch (error) {
    console.log(error);
  }
}