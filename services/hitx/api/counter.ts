import { NowRequest, NowResponse } from '@vercel/node';


export default async function handler(req: NowRequest, res: NowResponse) {
   console.log("HTTP", req.url);  
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=1, s-maxage=1, stale-while-revalidate");
    res.setHeader("Cache-Control", "max-age=1, s-maxage=1, stale-while-revalidate");
    var data = [];
    for (var i = 0; i < 100; i++) {
            data.push[i];
        }
    var obj = { hello: "world", data: data};
    
    res.end(JSON.stringify(obj)); 
}
