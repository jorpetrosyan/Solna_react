import './Learn.css';
import mercury from '../pagesImages/learnpic/learn.jpg';
import { RiFileListLine } from "react-icons/ri";
import Zoom from 'react-medium-image-zoom';

export default function Learn() {
  return (
    <div className='learn'>
        <div className="box">
            <div className="forText">
                <h3>
                    Developer
                    <br />
                    Resources
                </h3>
                <p>A manual for joining the Solana ecosystemn. By builders for builders.</p>
                <div className="btns">
                    <button>BUILD NOW</button>
                    <button>STACK EXCHANGE <RiFileListLine /> </button>
                </div>
            </div>
            <Zoom>
                <img src={mercury} alt="" />
            </Zoom>
            <div className="started">
                <p>Get started.</p>
                <span>Use these Solana Foundation and community courses to begin your journey into Solana development.</span>
            </div>
        </div>
    </div>
  )
}
