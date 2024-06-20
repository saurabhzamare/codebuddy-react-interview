export default function SubmitInfo(info) {
    try {
      const infoOptions = {
        method: 'POST',
        body: JSON.stringify(info),
      };
      return fetch(`${import.meta.env.VITE_API_URL}/submit`, infoOptions)
        .then(res => res.json())
        .then(res => res)
        .catch(e => {
          console.log(e);
        });
    } catch (error) {
      
      console.error(error.message);
    }
  }