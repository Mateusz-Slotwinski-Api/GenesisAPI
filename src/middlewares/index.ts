import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import history from 'connect-history-api-fallback'
import cors from './config/cors'

import limiter from './config/limiter'

const json = express.json()
const urlencoded = express.urlencoded({ extended: true })

const middlewares = [
  json,
  urlencoded,
  cookieParser(),
  cors,
  history(),
  morgan('dev'),
  helmet(),
  limiter,
]

export default middlewares
