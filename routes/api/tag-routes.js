const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.use('/tags');

router.get('/', async (req, res) => {
  // find all tags
  try {
    const TagData = await Tag.findAll({
      //include its associated product through ProductTag table
      include: [{model: Product, through: ProductTag}]
    });
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      //include its associated product through ProductTag table
      include: [{model: Product, through: ProductTag}]
    });
    if (!TagData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
