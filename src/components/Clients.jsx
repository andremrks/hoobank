import React from 'react'
import styles from '../style'
import { clients } from '../constants'

const Clients = ({logo}) => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full mb-12`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] sm:mb-0 mb-4 object-contain cursor-pointer zomm-hover-client"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients