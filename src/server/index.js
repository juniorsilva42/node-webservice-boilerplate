import restify from 'restify'
import path from 'path'

import cors from './cors'
import registerRoutesByPath from '../libs/@threesoft/way'

const server = restify.createServer()

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())

/*
 *
 * Registra todas as rotas
 * 
*/
registerRoutesByPath(server, path.join(__dirname, '../http/routes'))

export default server
