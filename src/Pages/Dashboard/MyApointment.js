import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyApointment = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {appointment.map(a => <tr>

                            <td>{a.patintName}</td>
                            <td>{a.treatment}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                        </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApointment;