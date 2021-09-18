import { Response, Request } from 'express'

class VersionController {
    show(request: Request, response: Response) {
        return response.status(200).json({
            'API Version': '1.0.0-ALPHA',
            'Seu IP': request.ip,
        })
    }
}

export default new VersionController()
