"use client"

import { ChangeEvent, FormEvent, useState } from "react";

function File() {
    const [files, setFiles] = useState<FileList | []>([])


    const handleFiles = (e:ChangeEvent<HTMLInputElement>) => { 
            const files = e.target.files as FileList
            setFiles(files)
     }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(files);
        
    }
    return (
        <div className="h-screen centerize">
            <form onSubmit={handleSubmit} className=" bg-white p-4 rounded text-black">
                <input onChange={handleFiles} className="border-4 text-black border-red-900 p-1 rounded" type="file" name="file" id="file" multiple />
                <button className="bg-blue-500 p-1 rounded mx-1" type="submit">submit</button>
            </form>
        </div>
    );
}

export default File;