## Frontend

- [x] Set up react
- [x] Set up tailwind

#### Landing page

- [x] Navbar
- [x] Welcome section
- [x] Search bar
- [x] Fetured property section
- [x] Why choose us section
- [x] Call to action section
- [x] News blog section
- [x] Footer section

#### Property page

## Backend

#### Setup server

- [x] Morgan
- [x] Helmet

#### Setup and connect to database

- [x] Connect to MongoDB

#### Setup eslint

- [x] npx eslint --init

#### Initialize CRUD routes for PROPERTY

- [x] GET proptery by id
- [x] POST create new property doc
- [x] PATCH update property
- [x] PATCH upload property images
- [x] DELETE property

#### Initialize CRUD routes for USER

- [x] GET user by id
- [x] POST sign up user
- [x] PATCH update user info,
- [x] PATCH upload user photo
- [x] DELETE user by id, deactivate user

#### Model data

- [x] Model property
- [x] Improve reading performance by indexing property model
- [x] Model users

#### Error handling middleware

- [x] Invalid routes 404

#### Authentication and security

- [x] Encrypt password
- [x] Authentication JWT
- [x] Send welcome email for Sign up
- [x] Authrnticate logging in users
- [x] Protect Routes for not logged in users
- [x] Auth user roles
- [x] Send password reset token in email for Forgot password
- [x] Reset password link to email if forgot password
- [x] Confirm old password when updating password
- [x] Implement rate limiting
- [x] Prevent parameter pollution (hpp)
- [x] Prevent cross site scripting (xss-clean)
- [x] Prevent NoSql injection (mongoose-sanitize)
- [x] Implement maximum log in attempts

#### Development test

- User routes

  - [] Sign up then send welcome email template to user
  - [] Log in then create and send token
  - [] Log out then delete token
  - [] Update info and upload photo
  - [] Update password
  - [] Forgot and reset password then send email to user
  - [] Delete account (deactivate)

- Property routes
  - [] Create a new property docs (restricted to admins and agents only)
  - [] Read all property docs (available for everyone)
  - [] Read a property doc by id (available for everyone)
  - [] Update info of a property doc and upload images (restricted to admins and agents only)
  - [] Delete a property doc (restricted to admins and agents only)
