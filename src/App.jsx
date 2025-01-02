import React from 'react';
import Navbar from './assets/components/Navbar';

import FrontendPortfolio from './assets/pages/HomePage'; // проверьте путь


import './assets/styles/global.css';  // Подключение глобальных стилей
import './assets/styles/animations.css';  // Подключение анимаций
import './assets/styles/fonts.css';  // Подключение шрифтов

function App() {
  return (
    <div>
      
      <FrontendPortfolio /> {/* Подключаем главный компонент */}
    </div>
  );
}

export default App;
