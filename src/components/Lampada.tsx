"use client"

import { useState } from "react"
import Image from "next/image"

export default function Lampada() {
  const [ligada, setLigada] = useState(false)

  function mudarEstado() {
    setLigada(!ligada)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src={ligada ? "/LampOn.png" : "/LampOff.png"}
        alt="lampada"
        width={160}
        height={160}
      />
      <Image
        src={ligada ? "/On.jpg" : "/Off.jpg"}
        alt="interruptor"
        width={80}
        height={80}
        onClick={mudarEstado}
        className="cursor-pointer"
      />
    </div>
  )
}
