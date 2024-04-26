export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 100, body: 'Success' });
    else reject(Error('The wrong API is not working currently'));
  });
}
