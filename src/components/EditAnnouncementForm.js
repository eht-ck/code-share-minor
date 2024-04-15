import React, { useState, useEffect } from "react";
import axios from "axios";

const EditAnnouncementForm = () => {
  const [announcement, setAnnouncement] = useState([]);

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  const fetchAnnouncement = async () => {
    try {
      const response = await axios.get("http://localhost:3001/announcements");
      const sortedAnnouncements = response.data
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5)
        .map((item) => ({ ...item, confirmDelete: false }));
      setAnnouncement(sortedAnnouncements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) return;
    try {
      await axios.delete(`http://localhost:3001/announcements/${id}`);
      setAnnouncement(announcement.filter((item) => item._id !== id));
      window.alert("Announcement deleted successfully."); // Show alert
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  const toggleConfirmDelete = (id) => {
    setAnnouncement(
      announcement.map((item) =>
        item._id === id ? { ...item, confirmDelete: !item.confirmDelete } : item
      )
    );
  };

  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-xl font-semibold mb-4">Edit Announcement</h2>
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Date</th>
              <th className="border border-gray-400 p-2">Announcement</th>
              <th className="border border-gray-400 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {announcement.map((announcementItem) => (
              <tr key={announcementItem._id}>
                <td className="border border-gray-400 p-2">
                  {new Date(announcementItem.date).toLocaleDateString()}{" "}
                  {new Date(announcementItem.date).toLocaleTimeString()}
                </td>
                <td className="border border-gray-400 p-2">
                  <p className="border border-gray-300 p-2 mb-2">
                    {announcementItem.announcement}
                  </p>
                </td>
                <td className="border border-gray-400 p-2">
                  {announcementItem.confirmDelete ? (
                    <div>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                        onClick={() => handleDelete(announcementItem._id)}
                      >
                        Confirm Delete
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                        onClick={() =>
                          toggleConfirmDelete(announcementItem._id)
                        } // Cancel delete
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      onClick={() => toggleConfirmDelete(announcementItem._id)} // Show confirm delete
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditAnnouncementForm;
