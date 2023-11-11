// components/MyComponent.js
import { useEffect } from 'react';
import PopupGfg from "../components/pop";
import  x from "../components/pop";

const MyComponent = async () => {
  useEffect( () => {
    const val =  PopupGfg()
    console.log(x[0])
    // Получение данных из внешнего источника (здесь использованы фиктивные значения)
    const externalData = {
      topValue:  "20px",
      leftValue: '30px',
    };

    // Применение данных к пользовательским переменным CSS
    document.documentElement.style.setProperty('--my-top-value', externalData.topValue);
    document.documentElement.style.setProperty('--my-left-value', externalData.leftValue);
  }, []); // Пустой массив зависимостей означает, что эффект выполняется один раз после монтирования

  return (
    <div className="selector" id="myElement">
      <PopupGfg/>
      <style jsx>{`
        :root {
          --my-top-value: 50px;
          --my-left-value: 20px;
        }

        .selector {
          position: absolute;
          top: var(--my-top-value);
          left: var(--my-left-value);
          width: 200px;
          height: 20px;

        }
      `}</style>
    </div>
  );
};

export default MyComponent;
