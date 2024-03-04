const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { tableName } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll().then((tagData)=>{
    res.json(tagData)
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    }
  }).then((tag) => res.json(tag))
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },
    {
    where: {
      id: req.params.id
    }
  }).then((tagData)=>res.json(tagData))
  .catch((err)=> res.send(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where:{
      id: req.params.id
    }
  }).then((deletedTag)=> res.json(deletedTag))
  .catch((err) => res.send(err))
});

module.exports = router;
