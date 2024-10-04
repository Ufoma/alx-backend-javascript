/**
 * Handles the response from the API.
 * @param {Promise} promise - Promise to handle.
 * @returns {Promise} Promise with handled response.
 */
function handleResponseFromAPI(promise) {
  return promise
    .then((responseData) => {
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      return new Error(); // Return an empty Error object
    })
    .finally(() => {
      globalThis.console.log('Got a response from the API');
    });
}
