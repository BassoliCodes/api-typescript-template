import { Router } from 'express'

import VersionController from './controllers/VersionController'

const routes = Router()

routes.get('/', VersionController.show)

export default routes
