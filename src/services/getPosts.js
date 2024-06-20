export default function GetPosts() {
    try {
      const postsOptions = {
        method: 'GET',
      };
      return fetch(`${import.meta.env.VITE_API_URL}/posts`, postsOptions)
        .then(res => res.json())
        .then(res => res)
        console.log(res)
        .catch(e => {
          console.log(e);
        });
    } catch (error) {
    
      console.error(error.message);
    }
  }