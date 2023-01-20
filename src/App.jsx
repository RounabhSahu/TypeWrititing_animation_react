import React from 'react';
import TextAnime from './TextAnime';

const App = () => {

    return (

        <div >
            <article className="pb-10 bg-lime-200 mb-10">
                <h1 className='text-4xl text-center pt-4'>Welcome</h1>
                <hr className=""/>
                <p className='text-center text-2xl pb-2'>This is simple text animation using React and little bit of CSS</p>
                <p className='text-center text-2xl pb-4 font-serif decoration-dashed underline text-orange-500 hover:text-purple-900'><a href='https://github.com/RounabhSahu/TypeWrititing_animation_react'>Github Link</a></p>
                <hr className="border-4 border-green-600"/>
                <ul className='text-2xl pl-60 pt-4'>
                    <li className='text-xl ml-20'><b>style</b> --default value: none --uses tailwind --styling for the text</li>
                    <li className='text-xl ml-20'><b>text</b> --required --use single string or array of 1 string for single text --array of multiple strings for multi text</li>
                    <li className='text-xl ml-20'><b>cursor</b> --default value: true --true value shows blinking cursor false remove cursor</li>
                    <li className='text-xl ml-20'><b>endCursor</b> --default value: false --true value removes cursor after completion false remains blinking cursor</li>
                    <li className='text-xl ml-20'><b>textSpeed</b> --default value: 7 --higher value more speed typing animation</li>
                    <li className='text-xl ml-20'><b>waitTime</b> --default value: 0 --waiting time in ms when using multi texts</li>
                    <li className='text-xl ml-20'><b>startTime</b> --default value: 0 --initial starting time</li>
                    <li className='text-xl ml-20'><b>loop</b> --default value: false --true will loop again false will run once</li>
                    <li className='text-xl ml-20'><b>allDelete</b> --true will delete all false will not</li>
                </ul>
            </article>
            <TextAnime
                style={"text-4xl text-gray-700 w-full items-center h-full text-center m-0"}
                text={['Single Text that disappears and starts 1s late']}
                startTime={1000}
                allDelete={true}
            />
            <TextAnime
                style={"text-4xl text-lime-900/50 w-full items-center h-full text-center m-0"}
                text={['Single Text that doesnt disappear with no cursor']}
                cursor={false}
                loop={false}
            />
            <TextAnime
                style={"text-4xl text-pink-900 w-full items-center h-full text-center m-0"}
                text={['Single Text that doesnt disappear and cursor disappears at end']}
                endCursor={false}
            />
            <TextAnime
                style={"text-4xl text-amber-900/60 w-full items-center h-full text-center m-0"}
                text={['Single Text that loops forever without deleting previous']}
                loop={true}
                waitTime={1000}
                allDelete={false}
            />
            <TextAnime
                style={"text-4xl text-blue-900 w-full items-center h-full text-center m-0"}
                text={['Multiple texts that keeps looping','You can also change typing speed','and other properties including styling also']}
                startTime={7000}
            />
            <TextAnime
                style={"text-4xl text-yellow-400 w-full items-center h-full text-center m-0"}
                text={['Have Fun ㋡㋡㋡㋡㋡㋡㋡㋡㋡㋡','started a bit late no? ㋡㋡㋡', 'Cursor won\'t disappear ㋡㋡㋡','It won\'t loop','waits 2s before transition','㋡㋡㋡㋡㋡㋡㋡㋡']}
                startTime={2000}
                waitTime={2000}
                loop={false}
            />
        </div>);
};

export default App;
