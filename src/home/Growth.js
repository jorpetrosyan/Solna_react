import './Growth.css';
import boyPic from '../objectPic/build/boy.png';
import aniBodyes from '../objectPic/build/anybodies.png';
import h1 from '../objectPic/build/mult1.png';
import h2 from '../objectPic/build/mult2.png';
import h3 from '../objectPic/build/mult3.png';
import h4 from '../objectPic/build/mult4.png';
import Zoom from 'react-medium-image-zoom';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';


export default function Growth() {
    const li = ['NFTs', 'Defi', 'Paymants', 'Gaming', 'DAOs'];
    const icons = [h1, h2, h3, h4];
    const text = "Build for growth."


    return (
        <div className='growth'>
            <div className="box">
                <nav>

                    <h3>
                        <Typewriter options={{
                            autoStart: true,
                            loop: 1,
                            strings: text,
                            cursor: ''
                        }}></Typewriter>
                    </h3>
                    <ul>
                        {
                            li.map((elem, index) => {
                                return (
                                    <li key={index}>{elem}</li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className="boyBlock">
                    <img className='img' src={boyPic} alt="" />
                    <div className="infos">
                        <div className="all">
                            <img src={aniBodyes} alt="" />
                            <p>
                                It's time to bridge the digital and physical.
                                Anybodies helps established brands like Toys'RUs connect real-ile places and products with NFTs.
                            </p>
                            <span>Leam more about NFTson Solana</span>
                        </div>
                    </div>
                </div>
                <div className="icons">
                    {
                        icons.map((elem, index) => {
                            return (
                                <Zoom>
                                    <img src={elem} key={index} alt="" />
                                </Zoom>
                            )
                        })
                    }
                </div>
                <h3 className='h3'>Join a thriving community.</h3>
            </div>
        </div >
    )
}
