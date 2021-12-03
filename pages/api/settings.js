
import settings from '../../settings'
import {get, handleCors} from 'eventjuicer-site-components'

export default async function handler(req, res) {
    await handleCors(req, res)
    const {path} = req.query
    res.status(200).json(path? get(settings, path): settings)
}