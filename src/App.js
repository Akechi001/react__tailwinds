import chip from './chip.png';
import './App.css';
import visa from './visa.png';
import mastercard from './MasterCard.png';
import {useState} from "react";
function App() {
    const [isFlipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div id="palingluar" className="flex-col">
            <div id="head-bar" className="flex justify-end">
                <div id="front-card"
                     className={`flex-col bg-amber-400 w-1/3 justify-between rounded-3xl m-8 p-5 active:transition-transform active:scale-x-[-1] select-none ${isFlipped ? 'hidden' : ''}`}
                     onClick={flipCard}>
                    <div className="">
                        <div id="headbard-card" className="flex justify-between">
                            <div className="flex-row  text-lg mb-4">
                                <p>credit card</p>
                            </div>
                            <div className="flex-row text-xl pr-6">
                                <p>BCA</p>
                            </div>
                        </div>
                        <div id="chip-card" className="flex">
                            <img src={chip} alt="" className="w-2/12"/>
                        </div>
                        <div id="card-number" className="flex justify-center text-5xl mt-6">
                            <p>0112 2334 5566 7889</p>
                        </div>
                        <div id="validitation-card" className="flex justify-between">
                            <div className="flex-row pl-2 text-lg">
                                <p>0123</p>
                            </div>
                            <div className="flex-row pr-3 text-lg">
                                <p>02/09</p>
                            </div>
                        </div>
                        <div id="bottom-card" className="flex justify-between mt-8">
                            <div id="name-card" className="flex-row pl-2 text-3xl pt-5">
                                <p>Enrico</p>
                            </div>
                            <div className="flex justify-end pr-3">
                                <div id="visa-logo" className="flex-row w-1/4">
                                    <img src={visa} alt=""/>
                                </div>
                                <div id="mastercard-logo" className="flex-row w-1/4">
                                    <img src={mastercard} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="back-card"
                     className={`flex-col bg-blue-200 w-1/3 justify-between rounded-3xl m-8 p-5 active:transition-transform active:scale-x-[-1] select-none ${isFlipped ? '' : 'hidden'}`}
                     onClick={flipCard}>
                    <div className="">
                        <div id="headbard-card" className="flex justify-between">
                            <div className="flex-row  text-lg mb-4">
                                <p>credit card</p>
                            </div>
                            <div className="flex-row text-xl pr-6">
                                <p>BCA</p>
                            </div>
                        </div>
                        <div id="chip-card" className="flex">
                            <img src={chip} alt="" className="w-2/12"/>
                        </div>
                        <div id="card-number" className="flex justify-center text-5xl mt-6">
                            <p>0112 2334 5566 7889</p>
                        </div>
                        <div id="validitation-card" className="flex justify-between">
                            <div className="flex-row pl-2 text-lg">
                                <p>0123</p>
                            </div>
                            <div className="flex-row pr-3 text-lg">
                                <p>02/09</p>
                            </div>
                        </div>
                        <div id="bottom-card" className="flex justify-between mt-8">
                            <div id="name-card" className="flex-row pl-2 text-3xl pt-5">
                                <p>Enrico</p>
                            </div>
                            <div className="flex justify-end pr-3">
                                <div id="visa-logo" className="flex-row w-1/4">
                                    <img src={visa} alt=""/>
                                </div>
                                <div id="mastercard-logo" className="flex-row w-1/4">
                                    <img src={mastercard} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div id="text" className="flex justify-center mt-12">
                <h1 className="text-8xl m-10">Are You Satisfied?</h1>
            </div>
            <div id="rating" className="flex justify-center p-8 m-8 text-4xl">
                <div id="button1" className=" border-2 border-neutral-950 p-3 m-2 active:bg-amber-400">
                    <p>1</p>
                </div>
                <div id="button2" className="border-2 border-neutral-950 p-3 m-2">
                    <p>2</p>
                </div>
                <div id="button3" className="border-2 border-neutral-950 p-3 m-2">
                    <p>3</p>
                </div>
                <div id="button4" className="border-2 border-neutral-950 p-3 m-2">
                    <p>4</p>
                </div>
                <div id="button5" className="border-2 border-neutral-950 p-3 m-2 ">
                    <p>5</p>
                </div>
            </div>
        </div>
    );
}
export default App;


