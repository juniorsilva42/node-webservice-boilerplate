import express from 'express'
import path from 'path'
import registerRoutesByPath from '../libs/@threesoft/way'

const app = express()

/*
 *
 * Registra todas as rotas
 * 
*/
//registerRoutesByPath(app, path.join(__dirname, '../http/routes'))

export default app
