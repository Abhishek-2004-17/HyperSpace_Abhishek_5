"use client";

import { SideBar } from "@/components/client/SideBar";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const [report, setReport] = useState<string>("");

  const handleGenrateReport = async () => {
    const email = localStorage.getItem("client") || "";

    if (email === "") {
      alert("Please login to generate report");
      return;
    }

    const res = await fetch(
      `https://mvr40.pythonanywhere.com/api/v1/reportgen?email=${email}`
    );

    if (res.status === 200) {
      toast.success("Report generated successfully");
      const data = await res.text();
      setReport(convertMarkdownToPlainText(data)); // Convert Markdown to plain text
    } else {
      toast.error("Report generation failed");
    }
  };

  // Function to strip Markdown syntax and format plain text
  const convertMarkdownToPlainText = (markdown: string): string => {
    return markdown
      .replace(/\*\*(.*?)\*\*/g, "$1") // Remove **bold**
      .replace(/\*(.*?)\*/g, "$1") // Remove *italics*
      .replace(/#+\s?(.*)/g, "$1") // Remove # headers
      .replace(/- /g, "") // Remove list item dashes
      .replace(/\n{2,}/g, "\n\n") // Normalize multiple newlines
      .replace(/\n/g, " "); // Convert single newlines to space
  };

  return (
    <>
      <SideBar />

      {report === "" && (
        <div className="ml-72 flex justify-center items-center mt-80">
          <button
            className="bg-blue-500 text-white rounded hover:bg-blue-600 px-4 py-2"
            onClick={handleGenrateReport}
          >
            Generate Report
          </button>
        </div>
      )}

      <div className="ml-72">
        {report !== "" && (
          <div className="flex justify-center items-center mt-20">
            <div className="p-4 rounded-lg shadow-lg whitespace-pre-wrap">
              <p>{report}</p> {/* Render as plain text */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
