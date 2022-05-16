import { useEffect, useState } from "react"


const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://gentle-everglades-35240.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Beare ${localStorage.getItem('accessToken')}`
                },


            })
                .then(res => res.json())
                .then(data => {

                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user])
    return [admin, adminLoading]
}

export default useAdmin