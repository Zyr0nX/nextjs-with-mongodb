const studentController = require('../../../../controllers/student');

export default async function handler(req, res) {

    const method = req.method;

    let result;

    switch (method) {
        case 'GET':
            result = await studentController.get();
            res.status(200).json(result);
            break;
        case 'POST':
            result = await studentController.add(req.body);
            res.status(201).json(result);
            break;
        default:
            res.status(405).json({ error: 'Method not allowed' });
            break;
    }
}
