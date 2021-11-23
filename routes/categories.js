
const express = require('express');
const router = express.Router();

router.get('/categories/:cateroryId/products/:productId', (req,res)=>{
  const { productId,cateroryId  } = req.params;
  res.json({
    cateroryId,
    productId
  });
});

module.exports = router;
