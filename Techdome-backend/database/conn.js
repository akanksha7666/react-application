mongoose.connect('mongodb://mongodb:27017/mydatabase')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


