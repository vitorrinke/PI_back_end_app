

import dotenv from 'dotenv'
import API from './api'



dotenv.config()

const PORT = process.env.PORT


API.listen(PORT, () => {
  console.log('server running', PORT)
})




