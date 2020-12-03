const express = require('express');
const router = express.Router();
const userSchema = require("../models/userSchema");

const validationMiddleware = (request, response, next)=>{
  const {error}=userSchema.validate(request.body)
  const valid = error == null;

  if(valid){
    next();
  }else{
    const {details} =error;
    const message = details.map(i => i.message).join(',');

    console.log("error", message);
    response.status(422).json({error: message})
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([]);
});

router.post('/', validationMiddleware, (request, response) => {
  response.json(request.body);
})

module.exports = router;
