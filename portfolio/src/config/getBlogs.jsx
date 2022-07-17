import axios from 'axios'

const getProyect = async (id) => {

  try {
    const URL = import.meta.env.VITE_URL_BLOG
    const TOKEN = import.meta.env.VITE_TOKEN
      const {data} = await axios(`${URL}/${id}`,  {
      "Content-Type": "application/json",
      headers: {
        "x-access-token": TOKEN
      },
    })
    return data.data[0];
  } catch (error) {
    console.log(error);
  }

}

export default getProyect