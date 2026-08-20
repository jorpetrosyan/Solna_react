import './NetWork.css'
import { GoArrowUpRight } from "react-icons/go";

export default function netWork() {
  const obj = [
    { id: 1, a: 'TOOL / LIBRARY', b: 'Core Documentation',     c: 'The official Solana documentation on developing, validatiors, SPL tokens, wallets and more',                                           d: 'LEARN MORE', },
    { id: 2, a: 'TOOL / LIBRARY', b: 'Solana Cookbook',        c: 'The Solana Cookbook is a developer resource that provides the essential concepts and rederaciec for building applications on Solana.', d: 'LEARN MORE', },
    { id: 3, a: 'TOOL / LIBRARY', b: 'Solana Stachk Exchamge', c: 'Solana StacksExchange is a question and answer site for Solana software users and developer.',                                         d: 'LEARN MORE', },
    { id: 4, a: 'TOOL / LIBRARY', b: 'Solana Playground',      c: 'Easily build, deploy and test Solana programs and smart contracts from a brouser IDE.',                                                d: 'LEARN MORE', },
    { id: 5, a: 'TOOL / LIBRARY', b: 'create-solana-dapp',     c: 'Get up and running fast with Solana dApps, grenerate a project template in seconds.',                                                  d: 'LEARN MORE', },
    { id: 6, a: 'TOOL / LIBRARY', b: 'Anchor Docs',            c: 'Anchor is a framework for Solana`s Swalevel runtime providing several conveninet developer tools for writing smart contracts.',        d: 'LEARN MORE', },
    { id: 7, a: 'TOOL / LIBRARY', b: 'Solana Program Library', c: 'The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.',                       d: 'LEARN MORE', },
    { id: 8, a: 'TOOL / LIBRARY', b: 'Program Examples',       c: 'Alist of curated examoles for a wide range of use cases implemented using on-chain programs.',                                         d: 'LEARN MORE', },
  ] 

  return (
    <div className='netWork'>
      <div className="box">
        <div className="title">
          <h3>Dig depper.</h3>
          <p> Learn from resources across the greater Solana ecosystem. </p>
        </div>
        <div className="detal">
          {
            obj.map((elem, index) => {
              return (
                <div className="work" key={index}>
                  <h3>{elem.a}</h3>
                  <h4>{elem.b}</h4>
                  <p>{elem.c}</p>
                  <span>{elem.d} <GoArrowUpRight /> </span>
                </div>
              )
            })
          }
        </div>


      </div>
    </div>
  )
}
