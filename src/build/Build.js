import './Build.css';
import I1 from '../pagesImages/buldpic/bulidback.jpg'
import I2 from '../pagesImages/buldpic/bulid1.png'
import I3 from '../pagesImages/buldpic/bulid2.png'
import I4 from '../pagesImages/buldpic/bulid3.png'
import I5 from '../pagesImages/buldpic/bulid4.png'
import I6 from '../pagesImages/buldpic/bulid5.png'
import I7 from '../pagesImages/buldpic/bulid6.png'
import { SlArrowRightCircle } from "react-icons/sl";

export default function Bulid() {
    const obj = [
        { id: 1, a: I1, b: '17 Chapters', c: 'Quickstar your Solana development starting from noothing to complex programs.', d: 'Solana Development Course' },
        { id: 2, a: I2, b: '14 Chapters', c: 'Buildspace', },
        { id: 3, a: I3, b: '12 Chapters', c: 'Solana Bytes', },
        { id: 4, a: I4, b: '1 Chapters', c: 'Scaffold Series', },
        { id: 5, a: I5, b: '3 Chapters ', c: 'Freecodecamp Solana Course', },
        { id: 6, a: I6, b: '167 Chapments', c: 'Solana Development by Knox', },
        { id: 7, a: I7, b: '8 Chapters', c: 'Solana Bootcamp', },
    ]

    return (
        <div className='bulid'>
            <div className="box">
                {
                    obj.map((elem, index) => {
                        return (
                            <div className="detal" style={{ background: `url(${elem.a})` }}>
                                <button>{elem.b}</button>
                                <p>{elem.d}</p>
                                <span>{elem.c}</span>
                                <SlArrowRightCircle />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}