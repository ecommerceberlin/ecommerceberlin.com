
import settings from '../../settings'
import {get} from 'eventjuicer-site-components'

export default function handler(req, res) {
    const {path} = req.query
    res.status(200).json(get(settings, path || ""))
}