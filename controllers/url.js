const shortId = require('shortid');
const url = require('../models/url'); // importing url 
const shortid = require('shortid');


async function newURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'URL is required' });
    const gid = shortid(8);// generates id of 8 characters
    await url.create({
        shortId: gid,
        redirectURL:body.url,
        visitHistory:[],
  },);

  return res.json({id:gid});
}

async function handle_analytics(req,res) 
{
     const shortId = req.params.var1;
     const  result = await url.findOne({shortId});
     return res.json({total_clicks:result.visitHistory.length,
        analytics : result.visitHistory,
     })
}
module.exports = {
    newURL,
    handle_analytics,
}