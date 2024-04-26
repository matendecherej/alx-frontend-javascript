export default function getResponseFromAPI(argument) {
  return new Promise((resolve, reject) => {
    if (argument === true) {
      const response = {
        status: 200,
        body: 'Success'
      };
      resolve(response);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  })
    .then(response => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(error => {
      console.log('Got an error from the API');
      return new Error();
    });
}
