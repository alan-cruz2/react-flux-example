var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/data', function (req, res) {
  res.json({
    items: [
      { id: 1, title: 'Item 44' },
      { id: 2, title: 'Item 2' },
      { id: 3, title: '42' }
    ]
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
