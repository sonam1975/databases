var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;



// app.get('/background', (req, res) => {
//   models.get()
//   fs.readFile('./background.jpg');
//   res.end(data);
// });

// const callback = (req, res) {
//   fs.readFile('./background.jpg');
//   res.end(data);
// }

// app.get('/swimmers/background', callback)

// app.use('/swimmers', swimRouter);

// router.get('/background', callback)