import './Grid.css';
import M1 from '../objectPic/itstime/time2.png';
import M2 from '../objectPic/itstime/time3.png';
import M3 from '../objectPic/itstime/time4.png';
import M4 from '../objectPic/itstime/time1.png';
import M5 from '../objectPic/itstime/time5.png';
import Typewriter from 'typewriter-effect';


export default function Grid() {
    const object = [
        { id: 1, a: '11,000', b: 'LANA HACKER HOUSE PARTICIPANTS', c: '#19161C', d: 'purple', },
        { id: 2, e: M1 },
        { id: 3, e: M2 },
        { id: 4, e: M3 },
        { id: 5, a: '3,800', b: 'DEVELOPERS BUDING DURING SOLANA HACATIONS', c: '#19161C', d: 'goldenrod', },
        { id: 6, e: M4 },
        { id: 7, a: '48,000', b: 'SOLANA DREAKPONT a022,', c: '#19161C', d: 'limegreen', },
        { id: 8, e: M5 }
    ];
    const forText = "It's time to join the thousands of creators, artists, and developers using Solana."

    return (
        <div className='grid'>
            <div className="gridAll">
                {
                    object.map((elem, index) => {
                        return (
                            <div className="gridDetal" key={elem.id} style={{ backgroundImage: `url(${elem.e})`, backgroundColor: elem.c }}>
                                <p style={{ color: elem.d }}>{elem.a}</p>
                                <span>{elem.b}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="box">
                <h4>
                    <Typewriter options={{
                        autoStart: true,
                        loop: true,
                        strings: forText,
                        cursor: '',
                    }}></Typewriter>
                </h4>
                <button className='but1'>
                    START BUILDING
                </button>
            </div>

        </div>
    )
}
