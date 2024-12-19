const API_URL = 'https://jlpt-vocab-api.vercel.app/api/words/random?level=5'

export const fetchRandomWord = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching random word:', error);
      throw error;
    }
  };


