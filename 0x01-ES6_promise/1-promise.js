// 1-promise.js

/**
 * Simulates getting a full response from an API.
 * @param {boolean} success - Indicates whether the API request is successful.
 * @returns {Promise} Promise object.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const responseData = { status: 200, body: 'Success' };
      resolve(responseData);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}
