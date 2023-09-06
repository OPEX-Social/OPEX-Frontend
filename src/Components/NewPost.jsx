import React, { useState } from 'react';
import Modal from 'react-modal'; // Import react-modal
//import './../Styles/NewPost.css'; // Import your CSS for styling

Modal.setAppElement('#root'); // Set the root element for react-modal

const NewPost = ({ onNewPost }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPostContent(''); // Clear the post content when closing the modal
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    // You can send the new post data to your backend or perform any other necessary actions.
    setIsModalOpen(false);
    setPostContent(''); // Clear the post content when the post is submitted
    onNewPost(); // Callback to notify the parent component of the new post.
  };

  const isPostButtonDisabled = postContent.trim() === ''; // Disable if no content

  return (
    <div>
      <button className='create-button' onClick={openModal}>+</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="New Tweet Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Create a New Post</h2>
        <form onSubmit={handlePostSubmit}>
          <p>
            You will be sharing what you type below with the world for 1 year. Be careful what information you share here!
          </p>
          <textarea
            placeholder="Tell the world! (In 140 characters or less)"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            rows="3"
            maxLength="140"
            required
          />
          <div className="button-group">
            <button
              type="submit"
              disabled={isPostButtonDisabled}
            >Post It!</button>
            <button type="button" onClick={closeModal} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default NewPost;
