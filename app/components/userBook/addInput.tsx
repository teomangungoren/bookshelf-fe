import React from 'react';
import {createUserBookByBookIdAPICall} from "@/app/services/UserBookService";
import "./userBook.css"

interface AddInputProps {
    bookId: string;
}

const AddInput: React.FC<AddInputProps> = ({ bookId }) => {
    const handleAddButtonClick = async (e:any) => {
        try {
            e.preventDefault()
           await createUserBookByBookIdAPICall({ bookId });
        } catch (error) {
            console.error("Hata:");
        }
    };

    return (
        <div>
            <button className="btn" onClick={handleAddButtonClick}>Kitaplarıma Ekle</button>
        </div>
    );
};

export default AddInput;
