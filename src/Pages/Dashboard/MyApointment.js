import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyApointment = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`https://gentle-everglades-35240.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointment(data)
                })
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
                        {appointment?.map(a => <tr>

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