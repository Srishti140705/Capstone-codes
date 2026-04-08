const express = require('express');
const mongoose = require('mongoose'); // Added mongoose
const app = express();
app.use(express.json());

// --- MONGODB CONNECTION ---
// Using your password 'srishti' and adding a database name 'Assignment14'
const mongoURI = "mongodb+srv://srishti:srishti@cluster0.ia8newp.mongodb.net/Assignment14?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB Atlas!"))
    .catch(err => console.error("Cloud connection error:", err));

// Define the Schema and Model
const studentSchema = new mongoose.Schema({
    name: String,
    mobile: String
});
const Student = mongoose.model('Student', studentSchema);

// --- API ROUTES ---

// 1. READ (Get All from MongoDB)
app.get('/students', async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.json(allStudents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. CREATE (Add to MongoDB)
app.post('/students', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 3. UPDATE (Edit in MongoDB)
app.put('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        if (!updatedStudent) return res.status(404).json({ message: "Student not found" });
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 4. DELETE (Remove from MongoDB)
app.delete('/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student deleted from MongoDB successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(3000, () => console.log("Part (b) MongoDB CRUD is running on port 3000"));