const studentController = require('../../../../controllers/student');

export default async function handler(req, res) {
    const id = req.query.Id;

    const method = req.method;

    let result;

    switch (method) {
        case 'GET':
            result = await studentController.getOne(id);
            res.status(200).json(result);
            break;
        case 'PUT':
            result = await studentController.update(id, req.body);
            res.status(200).json(result);
            break;
        case 'DELETE':
            result = await studentController.remove(id);
            res.status(200).json(result);
            break;
        default:
            res.status(405).json({ error: 'Method not allowed' });
            break;
    }
}
