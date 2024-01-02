'use client';
import React from 'react'
import UploadIcon from './UploadIcon'
import axios from 'axios'
import {useRouter} from "next/navigation";
import {useState} from "react";


const UploadForm = () => {

  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      const res = await axios.post('/api/upload', {
        file,
      });
      
      setIsUploading(false);
      const newName = res.data.newName;
      router.push('/'+newName);
    }
  }
  return (
    <label className="bg-green-600 rounded-full px-6 py-2 inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
    <UploadIcon />
     <span>
      Choose File</span>  
    <input onChange={upload} type="file" className="hidden" />

    </label>
  )
}

export default UploadForm;