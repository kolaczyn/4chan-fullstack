# Fullstack 4chan clone

1. [About](#about)
1. [Features](#features)
1. [Used Technologies](#used-technologies)
1. [Setup](#setup)

## About

It's a fullstack 4chan clone with React on the frontend and Node on the backend.  
I wanted to show that I am able to both consume and create a RESTful APIs by making this project.

## Features

- Decent looking frontend
- List of popular threads
- You can access any board
- You can create threads
- You can reply to threads
- <section style="color: #7f9540;">>greentext</section>

## Used Technologies

### Frontend

- React
  - Styled Components
  - React Router
  - React Helmet
  - React Testing Libarary

- Bootstrap (through Reactstrap)
- Jest
- Formik
- Yup

### Backend

* Node with Express
* TypeScript
* Mongoose
* MongoDB

## Setup

You first need to have MongoDB installed on your system and have its server running.  
You can find the instructions on how to do that [here](https://duckduckgo.com/?q=MongoDB+setup).

Then run the following commands:

```bash
git clone https://github.com/kolaczyn/4chan-fullstack.git
cd 4chan-fullstack

# run backend
cd backend
npm install
# tell the port number and Mongo server info.
# use .env.example as an example and edit it
cat .env.example > .env
# run a script populating db
npm run populate-db # after that exit with Ctrl+C
npm run dev

# run frontend (in a seperate terminal)
cd frontend
# tell where the backend is located in .env file
# use .env.example as an example and edit it
cat .env.example > .env
npm install
npm start
```
