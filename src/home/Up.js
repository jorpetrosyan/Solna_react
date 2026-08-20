import './Up.css';
import u1 from '../objectPic/upicons/icon1.png';
import u2 from '../objectPic/upicons/icon2.png';
import u3 from '../objectPic/upicons/icon3.png';
import u4 from '../objectPic/upicons/icon4.png';
import u5 from '../objectPic/upicons/icon5.png';
import u6 from '../objectPic/upicons/icon6.png';
import u7 from '../objectPic/upicons/icon7.png';
import Zoom from 'react-medium-image-zoom';

export default function Up() {
  const forImg = [u1, u2, u3, u4, u5, u6, u7];

  return (
    <div className='up'>
      <div className="box">
        <h3>
          Powerful for developers.
          Fast for everyone.
        </h3>
        <p>
          Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.
        </p>
        <div className="btns">
          <button className='but1'>Start Building</button>
          <button className='but2'>Read Docs</button>
        </div>
        <span>
          POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
        </span>
        <div className="icons">
          {
            forImg.map((items, index) => {
              return (
                <Zoom>
                  <img src={items} alt="" key={index} />
                </Zoom>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
