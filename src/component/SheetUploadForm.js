import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Papa from "papaparse";
import axios from "axios";

function UploadForm(email) {
  const [fileName, setFileName] = useState("");
  const [emails, setEmails] = useState([]);
  const [brandName, setBrandName] = useState(""); // For the brand name
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    client: "",
    event: "",
    body: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("📂 File selected: ", file?.name);

    if (file) {
      setFileName(file.name);
      console.log("📝 File name updated: ", file.name);

      Papa.parse(file, {
        header: false,
        complete: (results) => {
          console.log("✅ CSV parsing completed. Raw results: ", results);

          const extractedData = results.data.map((row) => {
            const brand = row[0]?.trim();
            const emails = row[1]?.split(',').map((email) => email.trim()).filter(Boolean);
            return { brand, emails };
          }).filter((row) => row.emails && row.emails.length);

          console.log("📧 Extracted data: ", extractedData);
          setEmails(extractedData);
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
      setIsLoading(false);
      return;
    }

    // Build an array of promises (one per CSV row)
    const promises = emails.map(({ brand, emails: emailList }) => {
      const subject = `${formData.client} / ${formData.event} / ${brand}`;

      console.log("📧 Preparing data to send: ", {
        email,
        emailList,
        brand,
        subject,
        ...formData,
      });

      // Return the promise from axios
      return axios.post("http://localhost:3001/user/upload-csv", {
        email,
        emails: emailList,
        brand,
        subject,
        ...formData,
      });
    });

    // Wait until *all* requests finish
    try {
      await Promise.all(promises);
      console.log("✅ All requests completed successfully!");
      alert("All emails processed successfully!");
    } catch (error) {
      console.error("❌ One or more requests failed: ", error);
      alert("Failed to send some or all emails. Check console for details.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-12 bg-[#dcd8d4]">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-12 h-12 border-4 border-t-4 text-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      <h2 className="text-4xl sm:text-2xl lg:text-5xl text-center font-bold mb-6 text-[#1D2026]">
        My Portal
      </h2>
      <div className="bg-[#D9D9D9] shadow-lg rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Upload Your Sheets Here</h2>
        <div className="mb-4 text-center">
          <label
            htmlFor="file-upload"
            className="bg-[#232021] text-white font-semibold hover:bg-pink-600 py-2 px-4 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-300 flex items-center justify-center"
          >
            <FaCloudUploadAlt className="mr-2" />
            Choose File
          </label>
          <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} />
          {fileName && <p className="mt-2 text-gray-600 text-sm"> 📄 {fileName}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="client" className="block text-gray-700 font-medium mb-1">Client</label>
            <input type="text" id="client" name="client" className="w-full border rounded-lg px-3 py-2" value={formData.client} onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="event" className="block text-gray-700 font-medium mb-1">Event</label>
            <input type="text" id="event" name="event" className="w-full border rounded-lg px-3 py-2" value={formData.event} onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Your subject line looks like this</label>
            <input type="text" id="subject" name="subject" className="w-full border rounded-lg px-3 py-2" value={`${formData.client} / ${formData.event} / ${emails.length ? emails[0].brand : ''}`} readOnly />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-1">Body</label>
            <textarea id="body" name="body" className="w-full border rounded-lg px-3 py-2" style={{ height: "150px" }} value={formData.body} onChange={handleInputChange}></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-[#232021] text-white font-semibold hover:bg-pink-600 py-2 px-6 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadForm;