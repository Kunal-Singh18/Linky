const mongoose = require('mongoose');

async function connectto(url)
{
    return mongoose.connect(url);
}


module.exports = {
    connectto,
} 