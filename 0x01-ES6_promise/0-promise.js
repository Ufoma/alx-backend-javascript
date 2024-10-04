// api.js

/**
 * Represents an API client.
 */
export default class APIClient {
  /**
   * Sends a request to the API and returns a Promise.
   * @returns {Promise} Promise resolving with API response data.
   */
  getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate API request (replace with actual implementation)
      globalThis.setTimeout(() => {
        const responseData = { message: 'Hello from API!' };
        resolve(responseData); // Resolve with API response data
        // reject('API request failed'); // Reject with error message
      }, 2000); // Simulate 2-second delay
    });
  }
}
