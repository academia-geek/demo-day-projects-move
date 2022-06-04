import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white mt-3 py-5 d-flex justify-content-around">
            <div >
                <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png' alt='logo' width="160"
            className="d-inline-block align-top"/>
                </div>
                 <div className="d-flex flex-column">
                     <span className="p-3"><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708379/nl3fa5zklhrrymos3idh.svg' alt='email'/> +1-543-123-4567</span>
                           
                            <span className="p-3"><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708379/cz4zakarjdgvuo6ulamy.svg' alt='email'/> cuentacorreomove@gmail.com</span>
                            
                        </div>
                        <div>
                            
                            
                        </div>
                    
                    <div className="d-flex flex-column">
                        <span className="p-3" href='/'><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1652101036/drtrf4heyadelcmxj7fp.png' alt='facebook' width="30"/> moverentayventa</span>
                        <span className="p-3" href='/'><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1652101038/kbgxgcjfu2x1pgaqnxd2.png' alt='instagram' width="30"/> moverenta</span>
                    </div>
                    <div className="d-flex flex-column" >
                        <span className="p-5">Medellín, Colombia</span>
                        
                    </div>
                    <div>
                                       
                    </div>
            
        </footer>
  )
}

export default Footer