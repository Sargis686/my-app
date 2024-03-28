import React, {useState} from 'react';
import s from "./style.module.scss"

// import background from `${process.env.PUBLIC_URL}/assets/background.png`;
interface FormData {
    name: string;
    email: string;
    message: string;
}

interface ConsultationContentProps {
    isVisible: boolean;
    onClose: () => void;
}

interface MainProps {
    onClose: () => void;

}

const ConsultationContent: React.FC<ConsultationContentProps> = ({isVisible, onClose}) => {
    return (
        <div className={s.parent} >
        <div className={`${s.content} ${isVisible ? s.visible : s.hidden}`}>
            <div className={s.header}>
                <span className={s.closeButton} onClick={onClose}>
                    <img src={process.env.PUBLIC_URL + '/assets/x.png'} alt="Mentor"/>
                </span>

                <h2 className={s.title}>Закажите обратный звонок</h2>
            </div>
            <form className={s.form}>
                <input type="text" name="name" placeholder="ИМЯ"/>
                <input type="email" name="email" placeholder="ТЕЛЕФОН"/>
                <button type="button" style={{width: '70%'}} className={`btn ${s['btn-light']}`}>Заказать обратный
                    звонок
                </button>

            </form>
        </div>
        </div>
    );
};

export const ConsultationBtn: React.FC<MainProps> = ({onClose}) => {
    const [showConsultation, setShowConsultation] = useState<boolean>(false);

    const handleConsultationClick = () => {
        setShowConsultation(!showConsultation);
    };

    return (
        <div className={s.buttons}>

            <button type="button" className={`btn ${s['btn-light']}`} onClick={handleConsultationClick}>Записаться на
                консультацию
            </button>
            <button type="button" className={`btn ${s['btn-light']}`}>Бесплатная консультация</button>

            {showConsultation && (
                <ConsultationContent isVisible={showConsultation} onClose={() => {
                    setShowConsultation(false);
                    onClose();
                }}/>
            )}


        </div>
    );
};

export default ConsultationBtn;
