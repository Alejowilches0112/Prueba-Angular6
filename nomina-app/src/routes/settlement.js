const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('pagos-db',['settlement']);

router.get('/settlement',(req, res, next) => {
    db.settlement.find((err,payment) => {
      if(err) return next(err);
      res.json(payment);
    });
});

router.get('/settlement/:id',(req, res, next) => {
    db.settlement.findOne({_id: mongojs.ObjectId(req.params.id)},(err,settlement) => {
      if(err) return next(err);
      res.json(settlement);
    });
});

router.post('/settlement', (req, res, next) =>{
    const settlement = req.body;
    db.settlement.save(settlement,(err,settlement) => {
          if(err) return next(err);
          res.json(settlement);
      })
});

router.delete('/settlement/:id',(req, res, next) => {
    db.settlement.remove({_id: mongojs.ObjectId(req.params.id)},(err, settlement) => {
        if (err) return next(err);
        res.json(settlement);
    });
});
module.exports = router;
