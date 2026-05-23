import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetailed] = useState("");
  const [Notes, setNotes] = useState([]);

  const submitHandeller = (e) => {
    e.preventDefault();

    const newNote = {
      title: title,
      details: details,
    };
    setNotes([...Notes, newNote]);
    setTitle("");
    setDetailed("");
  };
  
  const deleteNotes = (deleteInd)=>{
  const filteredNotes = Notes.filter((note,index)=>{
   return index !== deleteInd;
   })
   setNotes(filteredNotes);
  }

  return (
    <div className="min-h-screen bg-black text-white p-5 lg:p-10">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-10 h-full">
        {/* Left Side Form */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={submitHandeller} className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Add Notes</h1>
            {/*pehla input  TITLE*/}
            <input
              type="text"
              placeholder="Enter notes Heading"
              className="w-full rounded-lg px-5 py-4 border-2 border-gray-500 bg-transparent outline-none"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <textarea
              placeholder="Write details..."
              className="w-full rounded-lg px-5 py-4 h-40 border-2 border-gray-500 bg-transparent outline-none resize-none"
              value={details}
              onChange={(e) => {
                setDetailed(e.target.value);
              }}
            />

            <button className="bg-white text-black rounded-lg w-full py-3 font-semibold hover:bg-gray-300 transition">
              Add Note
            </button>
          </form>
        </div>

        {/* Right Side Notes */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Your Notes</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
            {Notes.map((Notes, idx) => {
              return (
                <div
                  key={idx}
                  className="
                   flex flex-col justify-between
                   h-80 w-80
                   rounded-xl
                   p-6
                   bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]
                   bg-cover
                   bg-center
                   overflow-hidden
                   "
                >
                  {/* TOP CONTENT */}
                  <div className="overflow-auto">
                    <h3 className="leading-tight text-2xl text-black font-bold break-words">
                      {Notes.title}
                    </h3>

                    <p className="mt-3 leading-tight font-medium text-gray-700 break-words">
                      {Notes.details}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="flex justify-center mt-4">
                    <button
                      className="
                      px-6
                      py-2
                      rounded-lg
                      bg-gradient-to-r
                     from-red-500
                     to-red-700
                     text-white
                      font-semibold
                      shadow-md
                      hover:scale-105
                      active:scale-95
                      transition-all
                      duration-200
                  "
                  onClick={()=>{
                    deleteNotes(idx);
                  }} >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
