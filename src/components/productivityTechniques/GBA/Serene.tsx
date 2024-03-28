import React, { useState, useEffect } from 'react';
import s from "./style.module.scss"

type ExchangeData = {
    Valute: {
        GBP: {
            Value: number;
        };
    };
};
  export const ExchangeRate = () => {
    const [gbpRate, setGbpRate] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
            const data = await response.json() as ExchangeData

            // Получение курса GBP и округление до целого числа
            const gbpRate = Math.round(data.Valute.GBP.Value);
            setGbpRate(gbpRate);
        };

        fetchData();
    }, []);

    return (
        <div  className={s.gbp}>
            <h2 style={{color:'#FFFFFF'}}>{gbpRate !== null ? gbpRate : 'Загрузка...'}</h2><br /> <br /> <p style={{fontSize:"16px"}}>Курс фунта стерлингов (GBP)</p>
        </div>
    );
};




export default ExchangeRate;
