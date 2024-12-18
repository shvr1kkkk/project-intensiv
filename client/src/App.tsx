import Home from "./components/Navbar"
import React, { useState } from 'react';
import Modal from "./components/Modal"; 

const App = () => {
  
    return (
      <div>
          <Home />
          <main>
              <ModalProps>
              
              </ModalProps>
          </main>
      </div>
  )
}
export default App



const ModalProps: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resumes, setResumes] = useState<Array<{ firstName: string; lastName: string; specialty: string; group: string }>>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (data: { firstName: string; lastName: string; specialty: string; group: string }) => {
      setResumes([...resumes, data]);
  };

  return (
      <div className="App">
          <button className="create-resume-button" onClick={handleOpenModal}>Создать Резюме</button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
          <div className="resume-list">
              {resumes.map((resume, index) => (
                  <div key={index} className="dannie">
                      <p >Имя: {resume.firstName}</p>
                      <p >Фамилия: {resume.lastName}</p>
                      <p >Специальность: {resume.specialty}</p>
                      <p >Группа: {resume.group}</p>
                  </div>
              ))}
          </div>
      </div>
  );
};














