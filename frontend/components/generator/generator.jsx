"use client"

import { useState } from "react";
import Error from "./error";
import SyntaxChar from "./syntaxchart";

export default function Generator(){

    const [userInput, setUserInput] = useState("")
    const [cronSyntax, setCronSyntax] = useState(["*","*","*","*","*"])
    const [isLoading,setIsLoading] = useState(false)

    async function sendUserInput(){
        console.log("clicked!")
        setIsLoading(true)
        const response = await fetch('https://muhammadalee.pythonanywhere.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input:userInput
            })
        })
        setIsLoading(false)
        const data = await response.json()
        const result=data.output.find(e=>e.split(" ").length<=7 && e.includes("*"))?.split(" ") ?? []
        setCronSyntax(result)
    }
    
    return (
        <div id="generatecode" className='grid grid-cols-1 justify-center grid-rows-[1fr,auto,1fr] items-center justify-items-center'>
            <h2 className="text-4xl font-black uppercase font-mono">Generate <span className="text-primary ">CRON</span> Syntax</h2>
            <div className="w-1/2 flex justify-center gap-x-5">
                <input onChange={e=>setUserInput(e.target.value)} value={userInput} placeholder="Your Query" className="focus:outline-none focus:bg-black font-mono focus:border focus:border-primary bg-zinc-800 w-full p-5 rounded-3xl"/>
                {isLoading ? <div className="border-2 border-primary rounded-3xl px-3 pr-5 text-black bg-primary text-3xl transition-[font-size,padding] flex items-center justify-center"><i className="fa-solid fa-hourglass ml-2 fa-spin"></i></div> :<button onClick={sendUserInput} className="border-2 border-primary rounded-3xl px-3 pr-5 hover:text-black hover:bg-primary hover:text-3xl transition-[font-size,padding]"><i className="fa-solid fa-arrow-right ml-2"></i></button>}
            </div>
            <button className=" before:content-['Click to Copy'] w-fit gap-x-10 flex justify-between p-2 rounded-[3.5rem] px-10">
                {cronSyntax.length===0 ? <Error/>:cronSyntax.map((item,index)=><SyntaxChar char={item}/>)}
            </button>
        </div>
    )
}