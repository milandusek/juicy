import { NowRequest, NowResponse } from '@vercel/node';
import * as db from "./_lib/db";
import { getTemplate } from './_lib/template';

export default async function handler(req: NowRequest, res: NowResponse) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=1, s-maxage=1, stale-while-revalidate");
    res.setHeader("Cache-Control", "max-age=1, s-maxage=1, stale-while-revalidate");
    var obj = { hello: "world"};
    res.end(JSON.stringify(obj)); 
}
