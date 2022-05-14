import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


//came from Available Apointment
const BookingModal = ({ treatement, date, setTreatment }) => {

    const [user, loading] = useAuthState(auth);

    const { _id, name, slots } = treatement;
    // handle submit button for from
    const handleSubmit = event => {
        event.preventDefault();
        const formatedDate = format(date, 'PP');
        const slot = event.target.slot.value;
        const booking = {
            treatmentID: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patintName: user.displayName,
            phone: event.target.phone.value

        }
        // lower case pp will cause a data error which shows time formate

        // send data to the backend 
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success) {
                    toast(`Apointment is set on ${formatedDate} at ${slot}`)
                }
                else {
                    toast.error(`Apointment is set on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                // close model
                setTreatment(null)
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2' >
                        {/* dyanamicaly used disable date value in input field */}
                        <input disabled type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        {/* used select for show the slot */}
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || ' '} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="text" disabled value={user?.email || ' '} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;