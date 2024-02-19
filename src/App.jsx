import React from "react"
import { getqrcode } from "./api/getQR"
import { useState } from "react"

function App() {

  const [qr, setQr] = useState("")
  const[content, setContent] = useState("")


  const handleClikc = async () => {
    if(content !== ""){
      const qr = await getqrcode(content)
      setQr(qr)
    }
  }
  return (
    <div className="px-4">
    <header className="pt-12 text-white text-center space-y-4">
      <h1 className="text-3xl">Qr code generator</h1>
      <h2 className="text-xl">Created by Luis with ✨</h2>
    </header>
      <main className='flex flex-col items-center gap-12 justify-center pt-24'>
      <article className="flex flex-col gap-2 text-white">
        <label htmlFor="url" className="text-2xl">Content</label>
        <div className="space-x-4">
          <input value={content} onChange={(e) => {setContent(e.target.value)}} className="text-black p-2 h-12 w-72 text-xl focus:outline-none rounded-sm shadow-sm" placeholder="..." id="url" type="text" />
          <button onClick={handleClikc} className="bg-[#422d92] ring-[#563bc0] focus:ring h-12 w-16 rounded-sm shadow-sm">GET</button>
        </div>
      </article>
      <article>
        {
          qr ? <div className="flex flex-col items-center gap-5">
            <img className="rounded shadow-md hover:scale-105 transition-transform" src={qr}/>
            <a href={qr} download className="bg-[#422d92] ring-[#563bc0] text-white focus:ring h-12 w-28 rounded-sm shadow-sm flex justify-center items-center">Download</a>
          </div>
          : <p className="text-white text-xl">Insert a text or url</p>
        }
      </article>
    </main>
    </div>
  )
}

export default App
