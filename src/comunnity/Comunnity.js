import './Comunnity.css';
import Img from '../pagesImages/networkpic/network.jpg';
import Zoom from 'react-medium-image-zoom';
import podcast from '../pagesImages/networkpic/podcast.jpg';
import youtube from '../pagesImages/networkpic/youtube.jpg';
import { GoArrowUpRight } from "react-icons/go";

export default function Comunnity() {
    return (
        <div className='comunnity'>
            <div className="box">
                <div className="left">
                    <p>Go to the source.</p>
                    <span>Read the documentation for Solana and popular tools.</span>
                    <div className="all">
                        <p>Solana Docs</p>
                        <button>VIEW ALL <GoArrowUpRight /></button>
                    </div>
                    <span className='span2'>Leam how Solana works and get a high-level understanding of Solana's architecture.</span>
                    <div className="big">
                        <p>Solana Changelog</p>
                        <span>
                            Some more Solana changes from Jacob & Joe.
                            Subscribe to the newsletter: https://solana.us17.list-
                            manage.com/s... Proposal - Priced Compute Units: ...
                        </span>
                        <button className='btnEnd'>LATEST EPISODE</button>
                    </div>
                    <div className="update">
                        <p>Solana Developer Update</p>
                        <span>
                            Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.
                        </span>
                        <form>
                            <input type="text" placeholder='Email' />
                            <button>SING UP</button>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <div className="all">
                        <p>Metaplex Docs</p>
                        <button>VIEW ALL <GoArrowUpRight /></button>
                    </div>
                    <span className='span2'>Learn what you build with Metaplex, make the process of creating and launching NFTS easier.</span>
                    <div className="big">
                        <Zoom>
                            <img src={Img} alt="" />
                        </Zoom>
                    </div>
                    <div className="update">
                        <p>Even more recources</p>
                        <span>More videos, more episodes. Discussions between industry leaders in both blockchain and technology, our team, and community developers.
                        </span>
                        <div className="btns">
                            <button>YOUTUBE <img src={youtube} alt="" /></button>
                            <button>PODCAST <img src={podcast} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
