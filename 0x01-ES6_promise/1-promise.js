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
  });
}
