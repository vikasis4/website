import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    res.send(
        `
        <div
        style="height: 100%; width:100%; display:flex; justify-content:center; align-items:center ">
        <h2 style="font-size:62px; text-align:center "> <span style="color:green"> Payment Successfull </span><br /><br /><br /> Click on <a
                href="https://rankboost.vercel.app">RankBoost</a> to return to the website </h2>
        </div>
        `
      );  }