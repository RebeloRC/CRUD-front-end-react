import * as admin from 'firebase-admin'
import express from 'express'
import cors from 'cors'

import { routes } from './routes/routes'

const app = express()

const credentials = require('../key.json')

admin.initializeApp({
  credential: admin.credential.cert(credentials)
})

export const db = admin.firestore();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(routes)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})
