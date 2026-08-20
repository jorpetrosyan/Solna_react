import './Random.css';

export default function Random() {
    const obj = [
        { big: '11.5M+', sml: 'ACTIVE ACCOUNTS',                c1: '#7E1FF1', c2: '#2ECAB4', c3 : 'black' },
        { big: '21.9M', sml: 'NFTS MINTED',                     c1: '#00A5DB', c2: 'black',     c3 : '#0062F5' },
        { big: '$0.00025', sml: 'AVERAGE COST PER TRANSACTION', c1: 'black',     c2: '#00C8AE', c3 : '#017593' }
    ];

    return (
        <div className='random'>
            <div className="box">
                <h3>
                    Join a community
                    <br />
                    of millions.
                </h3>
                <div className="numberBlock">
                    {
                        obj.map((elem, index) => {
                            return (
                                <>
                                    <p style={{ background: `linear-gradient(to right, ${elem.c1}, ${elem.c2}, ${elem.c3})` }}>{elem.big}</p>
                                    <span>{elem.sml}</span>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
