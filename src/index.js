const express = require('express');
const app = express();
const port = 3000;
const y = 'hey';
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, (err) => {
    if (err)
        console.error(err);
    else
        console.log(`server running on ${port}...`);
});
//# sourceMappingURL=index.js.map