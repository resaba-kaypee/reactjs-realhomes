# About the Realstate app

A fullstack app created using Node.js, Express, React + Hooks + Context API and MongoDB and designed using Tailwind CSS.

# Table of Contents

- [Features](#features)
  - [User Interface](#user-interface)
  - [User Authentication](#user-authentiation)
  - [API](#API)
- [Technologies](#technologies)
  - [Front-end Libraries and Framework](#front-end-libraries-and-framework)
  - [Back end Libraries and Technology](#back-end-libraries-and-technology)
- [Data Model](#data-model)

# Features

## User Interface

🌐 What you can you with in the app.

- Can search realstate properties in different state (if state is available).
- Can filter properties e.g(apartment, single-familyhome, no. of bedrooms, price etc.).
- Can sort properties e.g(newest, highest or lowest price, date posted etc.).
- View featured properties.
- View properties location on map using Mapbox.
- View property details, location on map, image gallery, virtual tour, in a single page along with similar properties on slide for upsale.
- Compute monthly mortage.
- Users can add a property on their list.
- Users can view and compare properties in their list.
- Implemented pagination.

## User Authentication

🙇🏻‍♀️ What users can do.

- Can register account and login.
- Recieve a welcome email upon registration.
- Users can upload photo.
- Users able to change password in account settings.
- Users able to change name and email in account settings.
- Users able to update password in account settings.
- Users able to request for reset password if forgot password.

## API

🏡Property

- Get all property details.
- Get single property details.
- Search properties by state.
- Sort properties by date, price, number of bedroom, bathroom garage and lot area.
- Paginate

🔒Admin

- Create new property.
- Read all property details.
- Update property.
- Delete property.
- Create new user (for agents or just user).
- Read all users details.
- Update user details.
- Delete user.

👥User

- Register account.
- Login and Logout.
- Update name and email.
- Update password.
- Reset password if forgot password.

## Future updates

- User can deactivate their account.
- Limit log in attempts.
- Upload images to AWS or other file storage services online.
- UI for admin and agent.
- UI for creating and uploading new properties.

# Technologies

📚 Main tech stack

- React
- NodeJS
- Express
- MongoDB

## Front-end Libraries and Framework

⏩ The front end designed was inspired with ♥ by [colorlib](https://colorlib.com)

- Mapbox + React Map GL
- Tailwind CSS
- React Carousel by [brainhubeu](https://github.com/brainhubeu/react-carousel#props)
- Axios
- React router dom
- DayJS

## Back end Libraries and Technology

⏪ The API design was created base on Natours App by Jonas Schmeddtman and then heavily adjusted base on front end.

- Express
- Mongoose
- Bcrypt
- Helmet
- Mongo sanitize
- Rate limit
- Node mailer
- XSS
- HPP
- Compression

## Data Model

🏡 Property

- Property ID [string]
- Property types [string]
  - Commercial
    - Office
    - Retail
    - Industrial
    - Special purpose
  - Residencial
    - Single-Family Home
    - Condominium
    - Townhouse
    - Land
- Property Status [string]
  - For Rent
  - For Sale
- Property title [string]
- Property description [string]
- Property features eg. Home theather, Marble floors, Garden [array string]
- Property location
  - Address [string]
  - State [string]
  - Zipcode [number]
- Basic information
  - Sale or rent price [number]
    - Post fix [per month/ per year]
  - Area size [number]
    - Size post fix [sq ft/ sq m]
  - Lot size [number]
    - Size post fix [sq ft/ sq m]
  - Bedrooms [number]
  - Bathrooms [number]
  - Garage [number]
  - Year built [date]
- Images gallery [array]
- Video [url]

👥 User

- Name [string]
- Email [string]
- Password [string]
- Phone [string]
- Photo [string]
- Role [string]

📝 Saved User property list

- User id [string]
- Property id [string]
- Created at [data]
