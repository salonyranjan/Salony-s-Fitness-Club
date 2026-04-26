export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

/**
 * Fetches data from RapidAPI and normalizes the response.
 * @param {string} url - The API endpoint
 * @param {object} options - Fetch options (headers/method)
 * @returns {Array|Object} Normalized data results
 */
export const fetchData = async (url, options) => {
  // Guard clause to prevent unnecessary network calls
  if (!url || url.includes('undefined') || url.includes('null')) {
    return [];
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      // Specifically catch rate limit errors common in RapidAPI free tiers
      if (response.status === 429) {
        return [];
      }

      return [];
    }

    const data = await response.json();

    // Normalizing results: 
    // ExerciseDB usually returns a direct Array.
    // YouTube Search returns an object with a 'contents' key.
    if (Array.isArray(data)) return data;
    if (data.contents) return data.contents;
    if (data.results) return data.results;

    return data;
  } catch (error) {
    return [];
  }
};