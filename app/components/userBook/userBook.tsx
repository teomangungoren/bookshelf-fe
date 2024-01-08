import React, { useEffect, useState } from 'react';
import { getAllUsersByBookIdAPICall } from "@/app/services/UserBookService";

interface User {
    id: string;
    username: string;
    firstName: string;
    surname: string;
}

const UserBookPage = ({ bookId }: { bookId: any }) => {
    const [bookUsers, setBookUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllUsersByBookIdAPICall(bookId);
                // Parse usernames to remove the email domain
                const parsedUsers = response.data.map((user: User) => {
                    return {
                        ...user,
                        username: parseUsername(user.username),
                    };
                });
                setBookUsers(parsedUsers);
            } catch (error) {
                console.error('API hatası:', error);
            }
        };

        fetchData();
    }, [bookId]);

    // Helper function to parse username
    const parseUsername = (email: string): string => {
        const atIndex = email.indexOf('@');
        if (atIndex !== -1) {
            return email.substring(0, atIndex);
        }
        return email; // If @ is not found, return the original string
    };

    return (
        <div>
            <h1>User with books </h1>
            {bookUsers.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>Kitaba sahip kullanıcı bulunamadı.</p>
            )}
        </div>
    );
};

export default UserBookPage;
