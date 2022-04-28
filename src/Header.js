import React from 'react';
import './css/style.css';
import profile from './images/profile.jpg';

const Header = () => {
  return(
    <>
      <div className='wrapper'>
          <div className='profile_img'>
              <img src={profile} alt="Matheus Tiburcio"></img>
          </div>
          <div className='profile_name'>Matheus Tiburcio</div>
          <div className='profile_info'>Desenvolvedor Front-End Júnior</div>
          <div className='profile_sociais'>
            <div className='sociais' onClick={() => window.location.href = 'https://github.com/tiburci0'}>
              <span className='title'>GitHub</span>
              <p className='title_info'>
                Veja todos meus projetos desenvolvidos.
              </p>
            </div>
            <div className='sociais' onClick={() => window.location.href = 'https://www.linkedin.com/in/matheus-tiburcio-a12092239/'}>
              <span className='title'>Linkedin</span>
              <p className='title_info'>
                Acesse meu Linkedin e tenha mais informações sobre mim!
              </p>
            </div>
            <div className='sociais' onClick={() => window.location.href = '../../CV_Matheus_Tiburcio_dos_Santos.pdf'}>
              <span className='title'>Currículo</span>
              <p className='title_info'>
                Baixe meu currículo e tenha mais informações!
              </p>
            </div>
            <div className='sociais' onClick={() => window.location.href = 'https://wa.me/5511952774586'}>
              <span className='title'>Whatsapp</span>
              <p className='title_info'>
                Entre em contato comigo.
              </p>
            </div>
          </div>
          <br />
      </div>
    </>
  )
}

export default Header;