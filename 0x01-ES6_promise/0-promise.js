// 0-promise.js

/**
 * Simulates getting a response from an API.
 * @returns {Promise} Promise object.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate API call (resolve or reject)
    resolve(); // or reject();
  });
}
