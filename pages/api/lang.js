
const i18n = require('eventjuicer-site-components/dist/server/i18n');
const settings = require('../../settings').default;

export default async (req, res) => {

    const texts = await i18n.getTexts(settings.system.lang_api_endpoint, 'purge' in req.query, settings.system);
    res.status(200)
    res.setHeader('Content-Type', 'application/json')
    res.json(texts)

}