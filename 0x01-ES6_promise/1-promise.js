// 1-promise.js

/**
 * Represents an API client.
 */
export default class APIClient {
  /**
   * Sends a request to the API and returns a Promise.
   * @param {boolean} success - Indicates whether the API request is successful.
   * @returns {Promise} Promise resolving with API response data or rejecting with an error.
   */
  getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        const responseData = { status: 200, body: 'Success' };
        resolve(responseData); // Resolve with API response data
      } else {
        const error = new Error('The fake API is not working currently');
        reject(error); // Reject with error object
      }
    });
  }
}
