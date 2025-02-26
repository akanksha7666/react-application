docker network create demo
=====================================================================
docker network ls
=========================================================================
docker build . -t frontend
===================================================================================
docker run --name=frontend --network=demo -d -p 3000:3000 frontend
=========================================================================================
 docker run --network=demo --name mongodb -d -p 27017:27017  mongo:latest
    cd /backend
   vim conn,js ----------------------------------------(changes)

  mongoose.connect('mongodb://mongodb:27017/mydatabase')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


==============================================================================================
  vim serice.js

 const port = process.env.PORT || 5000;   ---------------(adding a port)
===========================================================================================================================
 docker build -t backend .
 docker run --name=backend --network=demo -d -p 5000:5000 -e DB=mongodb://mongodb:27017/mydatabase -e PORT=5000 backend

