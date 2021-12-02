
import settings from '../../settings'

export default function handler(req, res) {
    res.status(200).json(settings)
}