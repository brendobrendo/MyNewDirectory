const Cowboy = require('../../models/Cowboy');

exports.getAllCowboys = async (req, res) => {
    try {
        const cowboys = await Cowboy.find();
        res.json(cowboys);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.getSingleCowboy = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const cowboy = await Cowboy.findById(id);

        if (!cowboy) {
            return res.status(404).json({ msg: 'Cowboy not found'});
        }

        res.json(cowboy);
    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Cowboy not found'});
        }
        res.status(500).send('Server Error');
    }
};

exports.createCowboy = async (req, res) => {
    try {
        console.log('req.body: ', req.body);
        const newCowboy = new Cowboy(req.body);
        console.log('newCowboy: ', newCowboy);
        const savedCowboy = await newCowboy.save();
        res.json(savedCowboy);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.deleteCowboy = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('id: ', id);
        const deletedCowboy = await Cowboy.findByIdAndDelete(id);

        if (!deletedCowboy) {
            return res.status(404).json({ msg: 'Cowboy not found'});
        }

        res.json({ msg: 'Cowboy deleted successfully'});
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Cowboy not found'});
        }
        res.status(500).send('Server Error');
    }
};

