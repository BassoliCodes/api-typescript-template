import { Router } from 'express'

import VersionController from '@controller/VersionController'

const routes = Router()

routes.get('/', VersionController.show)

export default routes
