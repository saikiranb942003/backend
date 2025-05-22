 require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const GITLAB_API_BASE = 'https://gitlab.com/api/v4';
const GITLAB_TOKEN = process.env.GITLAB_TOKEN;
const PROJECT_ID = encodeURIComponent(process.env.GITLAB_PROJECT);

app.post('/create-issue', async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Issue title is required.' });
  }

  try {
    const response = await axios.post(
      `${GITLAB_API_BASE}/projects/${PROJECT_ID}/issues`,
      { title, description },
      {
        headers: {
          'Private-Token': GITLAB_TOKEN,
        },
      }
    );

    res.status(201).json({
      message: 'Issue created successfully',
      issue: response.data,
    });
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
    res.status(500).json({
      error: 'Failed to create issue',
      details: err.response?.data || err.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API listening at http://localhost:${PORT}`);
});
