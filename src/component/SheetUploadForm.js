import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Papa from "papaparse"; // CSV parsing library
import axios from "axios";

function UploadForm(email) {
  const [fileName, setFileName] = useState("");
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    client: "",
    event: "",
    subject: "",
    body: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("📂 File selected: ", file?.name);

    if (file) {
      setFileName(file.name);
      console.log("📝 File name updated: ", file.name);

      Papa.parse(file, {
        header: true,
        complete: (results) => {
          console.log("✅ CSV parsing completed. Raw results: ", results);
          const extractedEmails = results.data.map((row) => row.Email).filter(Boolean);
          console.log("📧 Extracted emails: ", extractedEmails);
          setEmails(extractedEmails);
        },
        error: (error) => {
          console.error("❌ Error parsing CSV: ", error);
        },
      });
    } else {
      console.warn("⚠️ No file selected or invalid file.");
      setFileName("");
      setEmails([]);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`✏️ Updating form field: ${name} -> ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("🚀 Form submission initiated.");

    if (!emails.length) {
      alert("⚠️ No emails found in the uploaded CSV!");
      console.warn("⚠️ Submission halted: No emails found.");
      return;
    }

    console.log("📧 Preparing data to send: ", {
      email,
      emails,
      ...formData,
    });

    try {
      const response = await axios.post("http://localhost:3001/user/upload-csv", {
        email,
        emails,
        ...formData,
      });
      console.log("✅ Server response: ", response.data);
      alert(response.data.message);
      setIsLoading(false);
    } catch (error) {
      console.error("❌ Error submitting form: ", error);
      setIsLoading(false);
      alert("Failed to send emails. Check console for details.");
    }
  };

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-12 h-12 border-4 border-t-4 border-pink-500 rounded-full animate-spin"></div>
        </div>
      )}
      <div className="flex justify-center items-center min-h-screen -mt-16 pb-12">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Upload Your Sheets Here</h2>
          <div className="mb-4 text-center">
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:from-pink-600 hover:to-red-600 py-3 px-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
            >
              <FaCloudUploadAlt className="mr-2 text-2xl" />
              Choose File
            </label>
            <input
              type="file"
              id="file-upload"
              accept=".csv"
              className="hidden"
              onChange={handleFileChange}
            />
            {fileName && (
              <p className="mt-2 text-gray-600 text-sm font-medium italic">📄 {fileName}</p>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="client" className="block text-gray-700 font-medium mb-1">
                Client
              </label>
              <input
                type="text"
                id="client"
                name="client"
                placeholder="Client Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                value={formData.client}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="event" className="block text-gray-700 font-medium mb-1">
                Event
              </label>
              <input
                type="text"
                id="event"
                name="event"
                placeholder="Event Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                value={formData.event}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject Line"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="body" className="block text-gray-700 font-medium mb-1">
                Body
              </label>
              <textarea
                id="body"
                name="body"
                placeholder="Email Body"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                style={{ height: "150px", resize: "none" }}
                value={formData.body}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#E91E63] text-white font-semibold hover:bg-pink-600 py-2 px-6 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  );
}

export default UploadForm;
