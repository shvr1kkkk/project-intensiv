import React, { useState, useRef, useEffect } from 'react';

const Button2: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="btn-2" onClick={toggleDropdown}>Фильтр</button>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#option1">Курс</a>
                    <a href="#option2">Специальность</a>
                </div>
            )}
        </div>
    );
};

export default Button2;
