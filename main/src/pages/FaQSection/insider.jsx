import React from 'react';


export default function InsiderFAQ(){
    return(
        <div className="text-black relative">
            <div className="container px-5 py-24 mx-auto relative">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 dark:text-darkGreen">Frequenly Asked Question</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-white">The most common question about how our business and what can we do for You</p>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 select-none">
                    <div class="w-full lg:w-1/2 px-4 py-2">
                    <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        How Long is this site live?
                        </summary>

                        <span className="dark:text-white">
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                        </span>
                    </details>
                    <details class="mb-4">
                        <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                        Can I install/upload anything I want on there?
                        </summary>

                        <span className="dark:text-white">
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                        </span>
                    </details>
                    <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        How can I migrate to another site?
                        </summary>

                        <span className="dark:text-white">
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                        </span>
                    </details>
                    </div>
                    <div class="w-full lg:w-1/2 px-4 py-2">
                    <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Can I change the domain you give me?
                        </summary>

                        <span class="px-4 py-2 dark:text-white">
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                        </span>
                    </details>
                    <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        How many sites I can create at once?
                        </summary>

                        <span class="px-4 py-2 dark:text-white">
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                        </span>
                    </details>
                    <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        How can I communicate with you?
                        </summary>

                        <span class="px-4 py-2 dark:text-white">
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                        </span>
                    </details>
                    </div>
                </div>
            </div>
        </div>
    );
}