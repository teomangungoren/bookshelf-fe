import React from 'react';
import {createUserWishlist} from "@/app/services/UserWishListService";
import "../userBook/userBook.css"

interface AddInputProps {
    bookId: string;
}

const AddUserWishlist: React.FC<AddInputProps> = ({ bookId }) => {
    const handleAddButtonClick = async () => {
        try {
            await createUserWishlist({ bookId });
        } catch (error) {
            console.error("Hata:");
        }
    };

    return (
        <div>
            <button className="btn" onClick={handleAddButtonClick}>İstek Listeme Ekle</button>
        </div>
    );
};

export default AddUserWishlist;
