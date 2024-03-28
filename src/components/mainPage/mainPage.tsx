import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import s from './style.module.scss';
import ExchangeRate from "../productivityTechniques/GBA/Serene";
import DateSum from "../productivityTechniques/DateSumComponent/DateSumComponent";
import ConsultationBtn from "../consultation/consultation";
import Navbars from "../navbar/navbar";

export const MainPage = () => {
    const handleCloseMain = () => {
        // Действия, которые нужно выполнить при закрытии Main
    };

    return (
        <div>

            <div>
                <Navbars/>
            </div>

            <div className={s.main}>

                <div className={s.content}>

                    <header>
                        <h1>Создаю условия<br/> для вашего успеха</h1>
                        <br/>
                        <p>
                            Когда ваше время и энергия лучше сфокусированы, стремление к новым <br/>возможностям
                            становится
                            реальностью, ваш успех зависит от ваших действий
                        </p>
                    </header>
                    <br/>


                    <div className={s.wrapperMain}>
                        <section className={s.wrapper}>
                            <div>
                                <ConsultationBtn onClose={handleCloseMain}/>
                            </div>
                            <div className={s.w}>
                                <ExchangeRate/>
                                <DateSum/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.img}>
                    <img src={process.env.PUBLIC_URL + '/assets/mentor.png'} alt="Mentor"/>

                </div>
            </div>


        </div>
    );
};
