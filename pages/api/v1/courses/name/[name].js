import NextCors from 'nextjs-cors';

const courseController = require('../../../../../controllers/course');

export default async function handler(req, res) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const name = req.query.name;

    const method = req.method;

    let result;

    switch (method) {
        case 'GET':
            result = await courseController.getByName(name);
            res.status(200).json(result);
            break;
        default:
            res.status(405).json({ error: 'Method not allowed' });
            break;
    }
}
