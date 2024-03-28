import React, { useState, useEffect } from 'react';
import s from "./style.module.scss"
export const DateSum = () => {
    const [dateSum, setDateSum] = useState<number | null>(null);

    useEffect(() => {
        const calculateDateSum = (date: string): number => {
            const dateNumbers = date.replace(/[^0-9]/g, '');
            const sum = dateNumbers.split('').reduce((acc, num) => acc + parseInt(num), 0);
            return sum;
        };

        const today = new Date();
        const formattedDate = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
        const sum = calculateDateSum(formattedDate);

        setDateSum(sum);
    }, []);

    return (
        <div className={s.dateSum}>
            <h2 style={{color:'#FFFFFF'}}>{dateSum !== null ? dateSum : 'Вычисление...'}</h2> <br /> <br /> <p style={{fontSize:"16px"}}> техник для достижения целей</p>
        </div>
    );
};

export default DateSum;
