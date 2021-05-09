import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer e0hcWsNwkX47wBUYtxRvdMQnff4cO0QzQBe9qJb4a9I7mZ3UEEglkHiiDIWbggshrSP7p2JTqDgXvkPfdCiTIsIjyMbm262JTDadjeiMOdvQA17qegO4seU-okeXYHYx',
  },
});
