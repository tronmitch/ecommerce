const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  
  Category.findAll({
    include: [Product]
  }).then((categoryData)=>{
    res.json(categoryData)
  })
  // be sure to include its associated Products

  // res.send(er)
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where:{
      id: req.params.id
    }
  }).then((categoryData)=>{
    res.json(categoryData)
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.title
  })
  .then((newCategory)=>{
    res.json(newCategory)
  }).catch((err) =>{
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.title
  },
  {
    where:{
      id: req.params.id
    }
  })

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((deletedCategory)=>{
    res.json(deletedCategory)
  }).catch((err) => res.json(err))
});

module.exports = router;
