import React from 'react'

const BackgroundWithShapes: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Círculo grande en la esquina superior izquierda */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

      {/* Triángulo en la esquina superior derecha */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-pink-100 transform rotate-45"></div>

      {/* Rectángulo en la parte inferior izquierda */}
      <div className="absolute bottom-10 left-10 w-40 h-20 bg-yellow-100 rounded-lg transform -rotate-12 animate-bounce"></div>

      {/* Círculo pequeño en el centro derecha */}
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-100 rounded-full mix-blend-multiply animate-ping"></div>

      {/* Cuadrado rotado en el centro izquierda */}
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-purple-100 transform rotate-45 animate-spin"></div>

      {/* Forma irregular en la parte inferior derecha */}
      <div className="absolute bottom-0 right-0">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M196 144.5C168 186.5 74 207.5 25 170.5C-24 133.5 2.5 42 62.5 17.5C122.5 -7 224 102.5 196 144.5Z" fill="#FDE68A" fillOpacity="0.7"/>
        </svg>
      </div>

      {/* Líneas onduladas en el centro */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="300" height="100" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C50 22 100 78 150 50C200 22 250 78 300 50" stroke="#BFDBFE" strokeWidth="2"/>
          <path d="M0 70C50 42 100 98 150 70C200 42 250 98 300 70" stroke="#93C5FD" strokeWidth="2"/>
          <path d="M0 30C50 2 100 58 150 30C200 2 250 58 300 30" stroke="#60A5FA" strokeWidth="2"/>
        </svg>
      </div>

      {/* Nuevas formas añadidas */}
      
      {/* Hexágono en la esquina superior derecha */}
      <div className="absolute top-20 right-20">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="#C7D2FE" fillOpacity="0.7"/>
        </svg>
      </div>

      {/* Estrella en el centro izquierda */}
      <div className="absolute top-1/3 left-20 animate-spin-slow">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L36.5 23.5L60 30L36.5 36.5L30 60L23.5 36.5L0 30L23.5 23.5L30 0Z" fill="#FECACA" fillOpacity="0.7"/>
        </svg>
      </div>

      {/* Círculos concéntricos en la parte inferior central */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="60" fill="#D1FAE5" fillOpacity="0.3"/>
          <circle cx="60" cy="60" r="40" fill="#A7F3D0" fillOpacity="0.5"/>
          <circle cx="60" cy="60" r="20" fill="#6EE7B7" fillOpacity="0.7"/>
        </svg>
      </div>

      {/* Zigzag en la parte superior central */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20L40 0L80 40L120 0L160 40L200 20" stroke="#FCA5A5" strokeWidth="2"/>
        </svg>
      </div>

      {/* Contenido adicional iría aquí */}
     
    </div>
  )
}

export default BackgroundWithShapes