import express from 'express';
import { createConnection } from 'mysql2';
import cors from 'cors';
import { json } from 'body-parser';

const app = express();
const port = 8080;

// Middleware setup
app.use(cors());
app.use(json());

// Database connection
const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'system',
    database: 'sarthi'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.post('/api/appointments', (req, res) => {
    console.log('Request Body:', req.body); 
    const { doctorName, slot, patientId } = req.body;

    if (!doctorName || !slot || !patientId) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    const query = `INSERT INTO appointments (doctorName, slot, patientId) VALUES (?, ?, ?)`;
    db.query(query, [doctorName, slot, patientId], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Appointment creation failed.', error: err });
        }
        res.status(200).json({ message: 'Appointment created successfully.', appointmentId: result.insertId });
    });
});


// Registration endpoint
app.post('/api/users', (req, res) => {
    const { name, email, dob, relationship, gender, contactNumber, city, emergencyContactName, emergencyContactNumber, password, confirmPassword } = req.body;

    res.status(200).json({
        message: "Registration successful",
    });
    // Check for missing fields
    if (!name || !email || !dob || !relationship || !gender || !contactNumber || !city || !emergencyContactName || !emergencyContactNumber || !password || !confirmPassword) {
        return res.status(400).send({ message: 'All fields are required.' });
    }

    // Ensure passwords match
    if (password !== confirmPassword) {
        return res.status(400).send({ message: 'Passwords do not match.' });
    }

    // Corrected SQL query
    const query = `
        INSERT INTO users 
        (name, email, dob, relationship, gender, contactNumber, city, emergencyContactName, emergencyContactNumber, password, confirmPassword) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [name, email, dob, relationship, gender, contactNumber, city, emergencyContactName, emergencyContactNumber, password, confirmPassword], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send({ message: 'Registration failed', error: err });
        }
        res.status(200).send({ message: 'Registration successful' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${8080}`);
});
