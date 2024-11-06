module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))