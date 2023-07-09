'use client'
import React from 'react';
import Tesseract from 'tesseract.js';
// import 'react-pdf-to-image'
// import PDFJS from 'pdfjs-dist/webpack'

// pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Popup = ({ open, setOpen }) => {
    const inputRef = React.useRef(null);
    const [files, setFiles] = React.useState(null);
    const [text, setText] = React.useState('');
    
    const handleSubmit = () => {
        if(files.type='application/pdf'){
            convertPdfToImages(files);
            for(let i=0;i<pdf.numPages;i++){
                Tesseract.recognize(pages, 'eng', {
                    logger: (m) => {
                        console.log(m);
                        if (m.status === 'recognizing text') {
                        }
                    },
                })
                    .catch((err) => {
                        console.error(err);
                    })
                    .then((result) => {
                        console.log(result.data);
                        setText(result.data.text);
                    });
            }
        }
        else{
            Tesseract.recognize(files, 'eng', {
            logger: (m) => {
                console.log(m);
                if (m.status === 'recognizing text') {
                }
            },
        })
            .catch((err) => {
                console.error(err);
            })
            .then((result) => {
                console.log(result.data);
                setText(result.data.text);
            });
        }  
    };

    const convertPdfToImages = (files) =>{
        fetch(files).then(data => data.blob()).then(blob => {
            const reader = new FileReader();
            render.readAsDataURL(blob);
            reader.onloadend = () =>{
                pdfjsLib.getDocument(reader.result).promise.then(
                    pdf => {
                        const pages = [];
                        this.pdf = pdf;
                        for(let i=0;i<this.pdf.numPages;i++){
                            let x =this.getPage(i+1)
                            pages.push(readAsDataURL(x));
                        }
                        Promise.all(pages)
                        .then(pages=>{
                            console.log(PDFJS);
                            this.setState([pages]);
                        })
                    }
                )
            }
        })

        let dataFile = pdfjsLib.getDocument(files);
        dataFile.promise.then( )
    }


    return (
        <div className='absolute w-full h-full backdrop-brightness-75 backdrop-blur-md flex justify-center items-center ' onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
        }}>

            <div className={`bg-white rounded-lg  w-3/5 shadow-md transition-all`} onClick={(e) => {
                e.stopPropagation();
            }}>
                <div className='text-3xl rounded-t-lg font-bold bg-zinc-100 text-zinc-800 w-full h-20 flex justify-start px-10 items-center'>
                    Upload the details
                </div>
                <div className='px-24 py-10 w-full flex flex-col gap-10 justify-center items-center' >
                    <div className='w-full'>
                            <div class="flex items-center justify-center w-full">
                                <label for="dropzone-file" class=" flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" >
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 px-3"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">PDF files (Max 25MB)</p>
                                    </div>
                                    <input
                                        ref={inputRef}
                                        id="dropzone-file"
                                        type="file"
                                        multiple
                                        onChange={(e) => setFiles(URL.createObjectURL(e.target.files[0]))}
                                        hidden
                                        accept=" application/pdf, image/png, image/jpeg"
                                        class="hidden" />

                                </label>
                            </div>

                        <div className="mt-2 flex justify-center" style={{margin:'5px'}}>
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                style={{margin:'5px'}}
                                onClick={(handleSubmit)}
                            > Upload
                            </button>
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                style={{margin:'5px'}}
                                onClick={() => setFiles(null)}
                            > Cancel
                            </button>
                        </div>

                    </div>
                    <div className='text-3xl text-zinc-800s'>
                        OR
                    </div>
                    <div className='w-full'>
                        <div>
                            <textarea placeholder='Or paste the text here...' type='' className=' p-5 border w-full h-40 rounded-md active:border-blue-200 text-black' value={text} onChange={()=>setText(null)}/>
                        </div>
                        <div className="mt-2 flex justify-center">
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Popup