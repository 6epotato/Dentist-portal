import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const ApointmentBanner = ({ date, setDate }) => {

    let footer = <p>You have selected</p>
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApointmentBanner;