import NextCors from 'nextjs-cors';

const courseController = require('../../../../controllers/course');

export default async function handler(req, res) {

    const method = req.method;

    let result;

    switch (method) {
        case 'GET':
            result = await courseController.get();
            res.status(200).json(result);
            break;
        case 'POST':
            result = await courseController.add(req.body);
            res.status(201).json(result);
            break;
        default:
            res.status(405).json({ error: 'Method not allowed' });
            break;
    }
}
