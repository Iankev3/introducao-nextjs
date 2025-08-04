'use client'

import React, { useState } from "react";
import axios from "axios";
import { ReactFormState } from "react-dom/client";

type FormData = {
    title: string;
    body: string;
}

type ResponsaData = {
    id: number;
    title: string;
    body: string;
}

export default function CreatePostPage() {

    const [fomrData, setFormaData] = useState<FormData>(
        {title: "", body: ""})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormaData({
            ...fomrData,
            [event.target.name]: event.target.value  
        })


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

    const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts", fomrData {headers: {}})

    }

    const [responsaData, setresponsaData ] = useState<ResponsaData>(
        {id: 0, title: "", body:"" }
    )

    }

    return (
        
        <div>
            <div>
                <h1 className="">Criar Novo Post</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Titulo</label>
                        <input
                        className="" 
                        type="text"
                        name="title"
                        value={""}
                        required
                        onChange={handleChange}
                         />
                    </div>

                    <div>
                        <label>Conteudo</label>
                        <textarea name="body" className="" rows={2} onChange={handleChange} ></textarea>
                    </div>

                    <button>Publicar</button>

                </form>
          </div>
        </div>
    )
    }