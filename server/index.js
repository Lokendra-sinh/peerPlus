const express = require('express');
const app = express();
const cors = require('cors');

const studentRouter = require('./router/student.js');
const mentorRouter = require('./router/mentor.js');

app.use(cors());
app.use(express.json());

app.use('/api/v1/students', studentRouter);
//app.use('/api/v1/mentors', mentorRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})