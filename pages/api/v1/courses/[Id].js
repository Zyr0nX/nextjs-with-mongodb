const courseController = require('../../../../controllers/course');

import NextCors from 'nextjs-cors';
   
export default async function handler(req, res) {
    const id = req.query.Id;

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    const method = req.method;

    let result;

    switch (method) {
        case 'GET':
            result = await courseController.getOne(id);
            res.status(200).json(result);
            break;
        case 'PUT':
            result = await courseController.update(id, req.body);
            res.status(200).json(result);
            break;
        case 'DELETE':
            result = await courseController.remove(id);
            res.status(200).json(result);
            break;
        default:
            res.status(405).json({ error: 'Method not allowed' });
            break;
    }
}
