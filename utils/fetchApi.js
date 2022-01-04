import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'a195de22bfmsh6b1d85112df58aap12694ajsn7d830d5ddbb6',
    },
  });
    
  return data;
}