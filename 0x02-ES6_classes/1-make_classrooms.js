// 0-classroom.js

import ClassRoom from "./0-classroom.js";

/**
 * Initializes an array of ClassRoom objects.
 * @returns {ClassRoom[]} Array of ClassRoom objects.
 */
function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}

const rooms = initializeRooms();

rooms.forEach((room, index) => {
  console.log(`Room ${index + 1} size: ${room._maxStudentsSize}`);
});
