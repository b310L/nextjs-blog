// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    const body = req.body;
    res.status(200).json({ text: 'Hello' });
    console.log('body'+ JSON.stringify(body));
   
    
  }
