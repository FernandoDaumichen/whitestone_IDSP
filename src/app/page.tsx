import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Landing() {
    return (
        <div className={twMerge("flex flex-col p-5 h-screen")}
            style={{
                backgroundImage:
                    "var(--homepage-gradient, gradient-from-24008C via-9D32A5 to-641A99)",
            }}>
            <div className="bg-white p-8 rounded shadow-lg text-center items-center justify-center max-h-screen overflow-y-scroll">
                <div className="items-center flex justify-center">
                    <img className="flex object-center justify-center items-center" src='image/blackLogo.png' alt='WhiteStone Logo' width={300} height={50} />
                </div>
                <h1 className="text-5xl font-extrabold text-gray-800 mt-4">
                    Your Personal Dental Assistant
                </h1>
                <p className="text-gray-600 mt-4 text-xl">
                    Find out about the evolution of oral health care
                </p>
                <hr className='mt-5'></hr>
                <div className='text-center items-center justify-center flex'>
                    <div className='flex-initial mr-10 max-w-4xl'>
                        <h1 className="text-4xl font-extrabold text-purple-500 mt-10">
                            Why WhiteStone?
                        </h1>
                        <p className='text-black mt-5 text-lg text-center'>
                            When we started our work on WhiteStone we had one question we asked ourselves.
                        </p>
                        <p className='text-black text-2xl mt-4'><b>"How can we make dental care more accessible for those who need it?"</b></p>
                        <div className='text-center items-center justify-center flex'>
                            <p className='text-black mt-5 text-lg text-justify max-w-2xl'>After careful planning, we felt that putting the right tools in the hands of those individuals for free will acheive our goal. <b>1 in 3 Canadians lack proper access to dental care</b> and dental care knowledge. We hope with WhiteStone that we can lower the amount of individuals that are in dire need of dental health information and care resources.</p>
                        </div>
                    </div>
                </div>
                <hr className='mt-10'></hr>
                <div className='text-center items-center justify-center flex'>
                    <div className='mt-4 flex text-center items-center justify-center max-w-3xl'>
                        <div className='flex-initial row mr-10'>
                            <h1 className="text-4xl font-extrabold text-purple-500">Bringing Back Smiles</h1>
                            <p className='text-black mt-5 text-justify px-3 text-lg'>Our Goal with WhiteStone is create an <b>affordable alternative</b> to in person oral consultation. WhiteStone utilizes machine learning technology paired with your phone or computers camera to scan and quickly determine any possible oral afflictions you may be facing, then recommend your next steps for possible healthcare actions to improve your oral health.</p>
                        </div>
                        <img
                            className=""
                            src="image/Scan Pic.png"
                            alt="Placeholder"
                            width={260}
                        />
                    </div>
                </div>
                <hr className='mt-4'></hr>
                <div className='text-center items-center justify-center flex'>
                    <div className='mt-4 flex text-center items-center justify-center max-w-3xl'>
                        <img
                            className=""
                            src="image/Scan Details.png"
                            alt="Placeholder"
                            width={280}
                        />
                        <div className='flex-initial row ml-10'>
                            <h1 className="text-4xl font-extrabold text-purple-500">Track Your Progress</h1>
                            <p className='text-black mt-5 text-justify px-3 text-lg'>Follow your own dental health journey as the WhiteStone app tracks and documents each new scan. With a log of your previous dental scans, you can <b>gain dental care insights</b> into what oral care practices have been effective for you. </p>
                        </div>
                    </div>
                </div>
                <hr className='mt-4'></hr>
                <div className='text-center items-center justify-center flex'>
                    <div className='mt-4 flex text-center items-center justify-center max-w-3xl'>
                        <div className='flex-initial row mr-10'>
                            <h1 className="text-4xl font-extrabold text-purple-500">Learn About Your Teeth</h1>
                            <p className='text-black mt-5 text-justify px-3 text-lg'>Find informational <b>dental care resources</b> relating directly to your scan results in the app. Pair the effective dental scans with relevant oral care practices to immeditely improve the health of your teeth.</p>
                        </div>
                        <img
                            className=""
                            src="image/Health Resources.png"
                            alt="Placeholder"
                            width={270}
                        />
                    </div>
                </div>
                <hr className='mt-4'></hr>
                <div className='flex text-center items-center justify-center mt-10'>
                    <div className='bg-purple-200 rounded-md'>
                        <p className="text-gray-700 mb-2.5">
                            Try Our Demo
                        </p>
                        <a href="/Loading" className="bg-purple-500 text-white px-5 py-3 rounded-full">
                            Check It Out
                        </a>
                    </div>
                </div>
                <hr className='mt-10'></hr>
                <div className=''>
                    <h1 className="text-4xl font-extrabold text-gray-800 mt-6">Contact Us</h1>
                    <p className='text-black mt-2'><b>Email:</b><a href="mailto:White.Stone.23@gmail.com"> White.Stone.23@gmail.com</a></p>
                    <p className='text-black mt-2'><b>Blog:</b><a href="https://whitestone23.wixsite.com/whitestone"> WhiteStone</a></p>
                </div>
            </div>
        </div>
    );
};
