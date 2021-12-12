import express from 'express';
import bodyParser from 'body-parser';

import patientEphiRoutes from './routes/ephi.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use('/ephis', patientEphiRoutes);

app.get('/', (req, res) => res.send('Hello from home page'));
app.listen(PORT, () => console.log(`Server Running on port http://localhost:${PORT}`));
