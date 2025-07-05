const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/traces', async (req, res) => {
  try {
    const jaegerResponse = await axios.get('http://localhost:16686/api/traces?service=service-b');
    const data = jaegerResponse.data.data;

    const traces = data.map(trace => {
      const firstSpan = trace.spans?.[0] || {};
      const processKey = Object.keys(trace.processes || {})[0];
      const process = trace.processes?.[processKey] || {};

      return {
        traceId: trace.traceID || 'unknown',
        serviceName: process.serviceName || 'unknown',
        operationName: firstSpan.operationName || 'unknown',
        startTime: firstSpan.startTime ? new Date(Number(firstSpan.startTime / 1000)).toLocaleString() : 'unknown',
        duration: firstSpan.duration ? (firstSpan.duration / 1000).toFixed(2) : 'unknown',
        traceLink: `/trace/${trace.traceID}` // for future linking if needed
      };
    });

    res.json(traces);
  } catch (error) {
    console.error('Error fetching traces from Jaeger:', error.message);
    res.status(500).send('Failed to fetch traces');
  }
});



app.listen(PORT, () => {
  console.log(`Microtrace backend listening at http://localhost:${PORT}`);
});
