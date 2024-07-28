import React, { useEffect, useState } from 'react'
import userService, { User } from '../service/user-service';
import { CanceledError } from "../service/api-client";

const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const { request, cancel } = userService.getAll<User>()
        request
            .then((res) => {
                setLoading(false);
                setUsers(res.data);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => cancel();
    }, []);

    return { users, error, loading, setUsers,setError,setLoading}
}

export default useUser
