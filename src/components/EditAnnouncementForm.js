import React, { useState, useEffect } from "react";
import axios from "axios";

const EditAnnouncementForm = () => {
  const [announcement, setAnnouncement] = useState([]);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [editedAnnouncement, setEditedAnnouncement] = useState({ id: null, text: "" });

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  const fetchAnnouncement = async () => {
    try {
      const response = await axios.get("http://localhost:3001/announcements");
      const sortedAnnouncements = response.data
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
      setAnnouncement(sortedAnnouncements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) return; // Ensure id is defined
    try {
      await axios.delete(`http://localhost:3001/announcements/${id}`);
      setAnnouncement(announcement.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  const handleEdit = (announcement) => {
  setEditingAnnouncement(announcement);
  setEditedAnnouncement(prevState => ({
    id: prevState.id || announcement._id,
    text: announcement.announcement
  }));
};


  const handleSaveEdit = async () => {
  console.log(editedAnnouncement);
  console.log(editingAnnouncement.text, editedAnnouncement.text);

  try {
    await axios.put(`http://localhost:3001/announcements/${editingAnnouncement.text}`, { announcement: editedAnnouncement.text });
    setEditingAnnouncement(null);
    setAnnouncement(announcement.map(item => {
      if (item.announcement === editingAnnouncement.text) {
        return { ...item, announcement: editedAnnouncement.text };
      }
      return item;
    }));
  } catch (error) {
    console.error("Error editing announcement:", error);
  } finally {
    setEditedAnnouncement({ id: null, text: "" });
  }
};


  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Announcement</h2>
      {announcement.map((announcementItem) => (
        <div key={announcementItem._id}>
          <p className="border border-gray-300 p-2 mb-2">
            Date: {new Date(announcementItem.date).toLocaleDateString()} {new Date(announcementItem.date).toLocaleTimeString()}
          </p>
          {editingAnnouncement && editingAnnouncement._id === announcementItem._id ? (
            <input 
              type="text" 
              className="border border-gray-300 p-2 mb-2"
              value={editedAnnouncement.text} 
              onChange={(e) => setEditedAnnouncement({ ...editedAnnouncement, text: e.target.value })} 
            />
          ) : (
            <p className="border border-gray-300 p-2 mb-2">{announcementItem.announcement}</p>
          )}
          {editingAnnouncement && editingAnnouncement._id === announcementItem._id ? (
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
              onClick={handleSaveEdit}
            >
              Save
            </button>
          ) : (
            <div>
              <button 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleDelete(announcementItem._id)}
              >
                Delete
              </button>
              <button 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => handleEdit(announcementItem)}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditAnnouncementForm;
