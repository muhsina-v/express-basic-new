const express=require('express');
const app=express();
const multer=require('multer')
const path=require('path')

const storage =multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,res,cb)=>{
        cb(null,file.fieldname+ path.extname(file.originalname))
    }
})
const upload=multer({storage:storage});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send(`File uploaded successfully: ${req.file.filename}`);
});

// Start the server
app.listen(4000, () => {
    console.log('Server running on port 4000');
})