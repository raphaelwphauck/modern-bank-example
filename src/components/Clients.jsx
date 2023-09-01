import React from 'react'
import {clients} from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[195] min-w-[120px] m-3 feedback-card px-12 py-3 rounded-full`}>
            <img src={client.logo} alt='client_logo' className='sm:w-[195px] w-[100px] object-contain'/>
          </div>  
        ))}
      </div>
    </section>
  )
}

export default Clients;