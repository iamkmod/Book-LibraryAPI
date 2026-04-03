exports.create = Model => async (req, res) => res.json(await Model.create(req.body));

exports.getAll = Model => async (req, res) => res.json(await Model.find()); 

exports.getOne = Model => async (req, res) => res.json(await Model.findById(req.params.id));

exports.update = Model => async (req, res) => res.json(await Model.findByIdAndUpdate(req.params.id,req.body, {new:true}));

exports.remove = Model => async (req, res) => res.json(await Model.findByIdAndDelete(req.params.id));