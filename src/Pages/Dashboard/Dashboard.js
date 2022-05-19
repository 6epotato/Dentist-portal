import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl text-bold text-purple-600'>Wellcome To Your Dashboard</h2>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label for="sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard'}>My Apointments</Link></li>
                        <li><Link to={'/dashboard/review'}>My Reviews</Link></li>
                        <li><Link to={'/dashboard/history'}>My History</Link></li>
                        {admin &&
                            <>
                                <li><Link to={'/dashboard/users'}>All Users</Link></li>
                                <li><Link to={'/dashboard/addDoctor'}>Add a Doctor</Link></li>
                                <li><Link to={'/dashboard/manageDoctor'}>Manage Doctor</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;