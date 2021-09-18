import { Response, Request } from 'express'

class VersionController {
    show(request: Request, response: Response) {
        return response.send({
            'API Version': '1.0.0-ALPHA',
        })
    }
}

export default new VersionController()
