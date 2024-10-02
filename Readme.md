# Backend Project
Project Overview
This project is a backend API of Room Booking Company built using Node.js, Express.js, Mongoose, and TypeScript. It handles CRUD operations, database management, and provides a well-structured REST API for interacting with the application data.

Live URL
https://mrbsc-backend-dev.vercel.app/
Live GitHub Link
https://github.com/RezaulWebWorld/booking_service_Backend

# Features

User Authentication: Register and login with valid users.
CRUD Operations: Creating new User/Room/Bookings/slots etc , Updating User Info/Room Data/Booking Info etc, Soft Deleting any of the data and Also Get all type of data/room etc vary with the role
MongoDB Integration: Database connection via Mongoose for schema definition and queries.
TypeScript Support: Enhanced the quality of Code, improved developer experience and type safety.
Environment Configuration: Configured environment using .env for security and flexibility.
Technology Stack
Node.js: Server-side runtime.
Express.js: Web framework for routing and handling HTTP requests.
Mongoose: MongoDB object modeling for schema management and data handling.
TypeScript: Typed JavaScript ensuring code quality and minimizing bugs.

Set up environment variables: Create a .env file in the root of the project and add the following:

# Login Creditional For Admin
"name": "Admin",
"email": "admin@admin.com",
"password": "admin12",

# Run the server:

npm run start: dev

# The following API endpoints are available:

  USER ROUTES
* User Sign Up
Route: /api/auth/signup (POST)
* User Login
Route: /api/auth/login (POST)
  ROOM ROUTES
*Create Room (Only Accessible by Admin)
Route: /api/rooms (POST)
*Get a Room
Route: /api/rooms/:id (GET)
* Get All Rooms
Route: /api/rooms (GET)
* Update Room (Only Accessible by Admin)
Route: /api/rooms/:id (PUT)
* Delete a Room (Soft Delete, Only Accessible by Admin)
Route: /api/rooms/:id (DELETE)

  SLOTS ROUTE
* Create Slot (Only Accessible by Admin)
Route: /api/slots(POST)
* Get available slots
Route: /api/slots/availability(GET)
  ** date: The specific date for which available slots   are requested (format: YYYY-MM-DD).
  *** roomId: ID of the room for which available slots are requested.
  BOOKING ROUTS
* Create a Booking (Only Accessible by Authenticated User)
Route: /api/bookings (POST)
* Get All Bookings (Only Accessible by Admin)
Route: /api/bookings (GET)
*  Get User's Bookings (Only Accessible by Authenticated User)
Route: /api/my-bookings(GET)
* Update Booking (Only Accessible by Admin)
Route: /api/bookings/:id (PUT)
* Delete Booking (Soft Delete, Only Accessible by Admin)
Route: /api/bookings/:id (DELETE)

Additional Information
Error Handling: The project uses a custom middleware to handle errors and send informative messages back to the client.
Security: Includes basic security practices such as password hashing and JWT-based authentication.

Contributing
If you wish to contribute to the project, please fork the repository and create a pull request. All contributions are welcome!
