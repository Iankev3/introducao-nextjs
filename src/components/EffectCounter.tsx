"use client"

import { count } from "console";
import { useState } from "react"

export default function EffecterCounter() {

    const [Count, SetCount] = useState(0);

    return(
        <div className="text-center p-10">
            <h1>Contagem: {Count}</h1>
            <button onClick={()=>{SetCount(Count + 1)}} className="bg-blue-500 rounded-4xl w-20">
                interagir
            </button>

            <button className="bg-blue-300">

            </button>
        </div>
    )
}