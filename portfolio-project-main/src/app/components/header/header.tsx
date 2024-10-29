import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, I´m Luiz! </h1>
            <h2>Full-stack Developer</h2>
          </div>
          <Image
            src="/eu.jpg"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}