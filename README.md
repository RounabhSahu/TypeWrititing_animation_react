# Typing Animation using React and CSS
<hr/>
This is a typing animation that uses simple CSS just for blinking cursor and React to simulate typing animation.
This animation has properties that can be used to modify the typing animation to suit your tastes.
Use the following properties and pass it as a props to TypeAnime component and see the magic happen :)
<ul>
                    <li><b>style</b> <i>--default value: none --uses tailwind --styling for the text</i></li>
                    <li><b>text</b> <i> --required --use single string or array of 1 string for single text --array of multiple strings for multi text</i></li>
                    <li><b>cursor</b> <i> --default value: true --true value shows blinking cursor false remove cursor</i></li>
                    <li><b>endCursor</b> <i> --default value: false --true value removes cursor after completion false remains blinking cursor</i></li>
                    <li><b>textSpeed</b> <i> --default value: 7 --higher value more speed typing animation</i></li>
                    <li><b>waitTime</b> <i> --default value: 0 --waiting time in ms when using multi texts</i></li>
                    <li><b>startTime</b> <i> --default value: 0 --initial starting time</i></li>
                    <li><b>loop</b> <i> --default value: false --true will loop again false will run once</i></li>
                    <li><b>allDelete</b> <i> --true will delete all false will not</i></li>
</ul>

![text1.gif](text1.gif)
```jsx
<TextAnime
    style={"text-4xl text-gray-700 w-full items-center h-full text-center m-0"}
    text={['Single Text that disappears and starts 1s late']}
    startTime={1000}
    allDelete={true}
/>
```
You can change Styles also iwth tailwindcss :0

![text2.gif](text2.gif)
```jsx
<TextAnime
    style={"text-4xl text-lime-900/50 w-full items-center h-full text-center m-0"}
    text={['Single Text that doesnt disappear with no cursor']}
    cursor={false}
    loop={false}
/>
```
![text3.gif](text3.gif)
Don't want cursor at the end ... here we go ;-)

```jsx
<TextAnime
    style={"text-4xl text-pink-900 w-full items-center h-full text-center m-0"}
    text={['Single Text that doesnt disappear and cursor disappears at end']}
    endCursor={false}
/>
```
We can loop  ∞ infinitely ∞

![text4.gif](text4.gif)
```jsx
<TextAnime
    style={"text-4xl text-amber-900/60 w-full items-center h-full text-center m-0"}
    text={['Single Text that loops forever without deleting previous']}
    loop={true}
    waitTime={1000}
    allDelete={false}
/>
```
Mutiple texts maybe if you need ?

![text5.gif](text5.gif)
```jsx
<TextAnime
    style={"text-4xl text-blue-900 w-full items-center h-full text-center m-0"}
    text={['Multiple texts that keeps looping','You can also change typing speed','and other properties including styling also']}
    textSpeed={10}
    loop={true}
/>
```
Have Fun !!!

![text6.gif](text6.gif)
```jsx
<TextAnime
    style={"text-4xl text-yellow-400 w-full items-center h-full text-center m-0"}
    text={['Have Fun ㋡㋡㋡㋡㋡㋡㋡㋡㋡㋡','started a bit late no? ㋡㋡㋡', 'Cursor won\'t disappear ㋡㋡㋡','It won\'t loop','waits 2s before transition','㋡㋡㋡㋡㋡㋡㋡㋡']}
    startTime={2000}
    waitTime={2000}
    loop={false}
/>
```
