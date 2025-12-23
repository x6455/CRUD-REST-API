const express = require('express');
const citiesRouter = require('./routes/cities');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/cities', citiesRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`City CRUD API running on http://localhost:${PORT}`);
  console.log(`Endpoints:`);
  console.log(`  GET    ${PORT}/api/cities - List all cities`);
  console.log(`  GET    ${PORT}/api/cities/:id - Get city by ID`);
  console.log(`  POST   ${PORT}/api/cities - Create new city`);
  console.log(`  PUT    ${PORT}/api/cities/:id - Update city`);
  console.log(`  DELETE ${PORT}/api/cities/:id - Delete city`);
});
