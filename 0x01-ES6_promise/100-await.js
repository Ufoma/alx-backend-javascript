// 100-await.js

import { uploadPhoto, createUser } from './utils.js';

/**
 * Asynchronously uploads a user's photo and creates a user account.
 * @returns {Promise} Promise resolving with an object containing photo and user data.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    globalThis.console.error(error); // Log the error
    return { photo: null, user: null };
  }
}
