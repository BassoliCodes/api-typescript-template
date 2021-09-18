import { Response } from 'express'

class VersionController {
    show(response: Response) {
        return response.status(200).json({
            'API Version': `${process.env.APP_VERSION}-ALPHA`,
        })
    }
}

export default new VersionController()
