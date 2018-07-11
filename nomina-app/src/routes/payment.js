const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('nomina-db',['payment']);

router.get('/payment',(req, res, next) => {
    db.payment.find((err,payment) => {
      if(err) return next(err);
      res.json(payment);
    });
});

router.get('/payment/:id',(req, res, next) => {
    db.payment.findOne({_id: mongojs.ObjectId(req.params.id)},(err,payment) => {
      if(err) return next(err);
      res.json(payment);
    });
});

router.post('/payment', (req, res, next) =>{
    const payment = req.body;
    db.payment.save(payment,(err,payment) => {
          if(err) return next(err);
          res.json(payment);
      })

});

router.delete('/payment/:id',(req, res, next) => {
    db.payment.remove({_id: mongojs.ObjectId(req.params.id)},(err, payment) => {
        if (err) return next(err);
        res.json(payment);
    });
});

router.put(('/payment/:id'), (req, res, next) => {
  db.payment.update({_id: mongojs.ObjectId(req.params.id)} ,updatePayment,(err, payment) => {
    if(err) return next(err);
  });
});

module.exports = router;
