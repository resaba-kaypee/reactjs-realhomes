# About the Realstate app

A fullstack app created using Node.js, Express, React + Hooks + Context API and MongoDB and designed using Tailwind CSS.

# Table of Contents

- [Features](#features)
  - [User Interface](#user-interface)
  - [User Authentication](#user-authentiation)
- [Technologies](#technologies)
  - [Front-end Libraries and Framework](#front-end-libraries-and-framework)
  - ,[Back end Libraries and Technology](#back-end-libraries-and-technology)
- [Data Model](#data-model)

# Features

## User Interface

- Can search realstate properties in different state or city (if available).
- Can filter properties e.g(apartment, single-familyhome, no. of bedrooms, price etc.).
- Can sort properties e.g(newest, highest or lowest price, date posted etc.).
- View featured properties.
- View properties location on map using Mapbox.
- View property details, location on map, image gallery, virtual tour, in a single page along with similar properties on slide for upsale.
- Can add a property in user's list.
- Can view users saved properties and compare them.

## User Authentication

- Can register or deactivate account.
- Recieve a welcome email upon registration.
- Able to change password in account settings.
- Able to change name and email in account settings.
- Able to request for reset password when forgot password.

# Technologies

Main tech stack

- React
- NodeJS
- Express
- MongoDB

## Front-end Libraries and Framework

The front end designed was inspired with ♥ by [colorlib](https://colorlib.com)

- Mapbox + React Map GL
- Tailwind CSS
- React Carousel by [brainhubeu](https://github.com/brainhubeu/react-carousel#props)
- Axios
- React router dom

## Back end Libraries and Technology

The API design was created base on Natours App by Jonas Schmeddtman and then heavily adjusted base on front end.

- Express
- Mongoose
- Bcrypt
- Helmet
- Mongo sanitize
- Rate limit
- Node mailer
- XSS
- HPP

# Data Model

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

- Images gallery [array images]

- Video [url]

- Property Agent information
  - Name
  - Phone
  - Email
  - Image
