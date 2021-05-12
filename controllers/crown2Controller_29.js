const Category_29=require('../model/categoryModel_29');
const clothing_29 = require('../model/clothingModel_29');

exports.getHomepage =async (req, res) =>{
  let data;
  const [rows] = await Category_29.fetchAll();
  data=rows;
  //res.json(data);
  res.render('crown2_29', { 
   title: '408411329 黃于豪(async/await)',
    data  
  });
}

exports.getProductsByCategory =async (req, res) =>{
    console.log('req.params',req.params.product);
    let data={};
    data.cid = 0;
    if (req.params.product === 'hats')data.cid=1;

    else if (req.params.product === 'jackets')data.cid=2;
  
    else if (req.params.product === 'sneakers')data.cid=3;
  
    else if (req.params.product === 'womens')data.cid=4;
    
    else if (req.params.product === 'mens')data.cid=5;
    
    const [rows] = await clothing_29.fetchProductByCategory(data.cid)
    data.clothing=rows;
    res.render(req.params.product, { 
      data
    });

    //res.json(data);

  }
