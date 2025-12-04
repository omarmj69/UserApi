UsersAPI – README


you can run the project by this command => "node src/server.js"


ENDPOINTS:

1- Base URL:"http://localhost:3000/api" => Server running on port 3000

2- Register new user: POST "http://localhost:3000/api/auth/register"
for testing : Body(JSON) =>
{
  "name": "Omar",
  "email": "omar@mail.com",
  "password": "Password1",
  "confirmPassword": "Password1"
}

3- Login: POST "http://localhost:3000/api/auth/login"
for testing : Body(JSON) =>
{
  "email": "admin@mail.com",
  "password": "12345Asdasd"
}

4- Show all users ADMIN ONLY: GET "http://localhost:3000/api/users"
for testing : HEADER(Authorization: Bearer Admin Token)

5-Update user:PUT "http://localhost:3000/api/users/:id"
for testing : HEADER(Authorization: Bearer Admin Token) &&& Body(JSON) =>
{
  "name": "Omar Updated",
  "email": "omar_new@mail.com",
  "password": "NewPassword1",
  "role": "USER"
}

6- Delete user: DELETE "http://localhost:3000/api/users/:id"
for testing : HEADER(Authorization: Bearer Admin Token)


****NOTE**** : The seed to make sure there is an admin






