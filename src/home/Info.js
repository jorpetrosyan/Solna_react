import './Info.css'

export default function Info() {
    const objInfo = [
        { color : 'dodgerblue', title: 'Fast', text: 'Don`t keep your users waiting.Solana has block times of 400 milliseconds - and as hardware gets faster, so will the network.', number : '3,969', text2 : 'TRANSACTION PER SECOND'},
        { color : 'yellow',     title: 'Decentralized', text: 'The Solana network is validated by thousands of nodes that operate independently of each orther, ensuring your data remains secure and censorship resistant.', number: '1,675', text2: 'VALIDATPR NODES' },
        { color : 'purple',     title: 'Scalable', text: 'Get big, quick, Solana is made to handle thousands of transitions per second, and fees for bioth developers and users ramain less than $0.01.', number: '163,077,571,394', text2: 'TOTAL TRANSACTIONS' },
        { color : 'green',      title: 'Energy Efficient', text: 'Solana`s proof of stake network and orther innovations minimize its impact on the environment. Each Solana transition uses about the same energy as a few Google searches', number: '0%', text2: 'NET CARBON IMPACT' },
    ];
    
    return (
        <div className='info'>
            <div className="box">
                <h3>Made for
                    <br />
                    mass adoption.
                    <span>LIVE DATA</span>
                </h3>
                <div className="container">
                 {
                    objInfo.map((elem,index) => {
                        return(
                            <div className='item'>
                            <h4 style={{borderLeft : `1px solid ${elem.color} `}}>{elem.title}</h4>
                            <p>{elem.text}</p>
                            <p>{elem.number}</p>
                            <p>{elem.text2}</p>
                            </div>
                                  
                        )
                         
                    })
                 }
                </div>
            </div>
        </div>
    )
}
