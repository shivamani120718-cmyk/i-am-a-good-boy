const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend running' });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend 🚀' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
