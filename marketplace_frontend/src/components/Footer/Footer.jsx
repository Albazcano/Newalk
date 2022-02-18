import React from 'react';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.interestedContainer}>
        <p className={style.links}>
          PRIVACIDAD <br />
          COOKIES <br />
          TÉRMINOS Y CONDICIONES <br />
          FAQS <br />
          CAMBIOS Y DEVOLUCIONES <br />
          CONTACTO <br />
          TRACKING
        </p>
      </div>
      <div className={style.socialContainer}>
        <p className={`${style.links} ${style.socialText}`}>
          INSTAGRAM <br />
          FACEBOOR <br />
          TWITTER <br />
          YOUTUBE <br />
        </p>
      </div>
      <div className={style.copy}>
        <div className={style.containerLogo}>
          <img src='' alt='Logo Newalk' className={style.logo}></img>
        </div>
        
        <p className={style.copyText}>
          © 2022, NeWalk Todos los derechos reservados
        </p>
        <p className={style.copyText}>
          Desarrollado por Equipo 10 hackathon Adevinta 
        </p>
      </div>
    </footer>
  );
}
