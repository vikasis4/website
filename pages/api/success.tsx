import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    res.send(
        `
        <div style="height: 100vh; width:100vw; display:flex; justify-content:center; align-items:center; flex-direction:column ">
        <h2 style="font-size:4rem; text-align:center; color:green">Payment Successsfull</h2>
        <h1 style="color:#5A4FCF; font-size:8rem">RankBoost</h1>
        <a style="text-decoration:none; display:flex; justify-content:center; padding:1rem 4rem; align-items:center; font-size:4rem; background-color:#5A4FCF; color:white; height:8rem;  border-radius:4px" href="https://rankboost.vercel.app/payment/process">Return to Home</a>
        </div>
        `
      );  }