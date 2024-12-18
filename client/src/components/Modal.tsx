import React, { useState } from 'react';
import '../App.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { firstName: string; lastName: string; specialty: string; group: string }) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [group, setGroup] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ firstName, lastName, specialty, group });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Создать Резюме</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Имя" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    <input type="text" placeholder="Фамилия" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    <input type="text" placeholder="Специальность" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required />
                    <input type="text" placeholder="Группа" value={group} onChange={(e) => setGroup(e.target.value)} required />
                    <button className="create"type="submit">Создать</button>
                </form>
                <button className="close" onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;
