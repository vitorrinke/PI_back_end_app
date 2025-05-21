import express, {Application} from 'express'

import router from './routers/routers'

import cors from 'cors';

const API: Application = express() 


API.use(cors())

API.use(express.urlencoded({extended: false}))
API.use(express.json())


API.use('/', router)

export default API