import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import pfp1 from "../assets/Profile_Pic_1.png";
import pfp2 from "../assets/Profile_Pic_2.png";
//import "font-awesome/css/font-awesome.min.css";
import { TutorTileCard } from "./TutorTile";
import TutorModal from "./TutorModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// source used for like button
// https://chayanit-chaisri.medium.com/how-to-add-a-like-button-react-usestate-3f79aac27d90

function SearchTutor(props) {
  const [date, setDate] = useState(new Date());
  const [subject, setSubject] = useState("Select Subject");
  const [tutor, setTutor] = useState("Select Tutor");
  const [modal, setModal] = useState(false);

  function open() {
    setModal(!modal);
  }

  const handleDateChange = (date) => {
    setDate(date);
    console.log(date);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleTutorChange = (event) => {
    setTutor(event.target.value);
  };

  return (
    <div>
      <div className="main-container">
        <Sidebar className="dbPageSidebar" renderType="student"></Sidebar>

        <div className="main-columns">
          {/* <h2> Second column </h2>
          <p> This is Second column of our grid system</p>
 */}
          <p className="find-text">Find your tutor</p>
          <div className="container-filters">
            <div className="box-filters">
              <div className="text-under-find">Date</div>
              <DatePicker
                className="base-input-style datepicker-input"
                selected={date}
                onChange={handleDateChange}
              />
            </div>
            <div className="box-filters">
              <div className="text-under-find">Subject</div>
              <select
                id="filterSelect"
                onChange={handleSubjectChange}
                value={subject}
              >
                <option value="Select Subject">Select Subject</option>
                <option value="CS 1336">CS 1336</option>
                <option value="CS 2336">CS 2336</option>
                <option value="CS 3345">CS 3345</option>
                <option value="CS 3345">CS 4348</option>
              </select>
            </div>
            <div className="box-filters">
              <div className="text-under-find">Tutor</div>
              <select
                id="filterSelect"
                onChange={handleTutorChange}
                value={tutor}
              >
                <option value="Select Tutor">Select Tutor</option>
                <option value="Tasnim Mahi">Tasnim Mahi</option>
                <option value="Diana Le">Diana Le</option>
              </select>
            </div>
          </div>

          <div className="tutor-container">
            {(tutor === "Tasnim Mahi" ||
              subject === "CS 1336" ||
              subject === "CS 2336") && (
              <TutorTileCard
                pfp={pfp1}
                stars={"⭐ ⭐ ⭐ ⭐ ⭐ (489)"}
                name={"Tasnim Mahi"}
                subjects={"📚 CS 1336, CS 2336"}
                bio={
                  "Experienced tutor passionate about empowering students to excel in math and computer science through personalized guidance and innovative teaching."
                }
                cost={50}
              ></TutorTileCard>
            )}
            {(tutor === "Diana Le" ||
              subject === "CS 3345" ||
              subject === "CS 4348") && (
              <TutorTileCard
                pfp={pfp2}
                stars={"⭐ ⭐ ⭐ ⭐ ⭐ (20)"}
                name={"Diana Le"}
                subjects={"📚 CS 3345, CS 4348"}
                bio={
                  "Experienced tutor passionate about empowering students to excel in math and computer science through personalized guidance and innovative teaching."
                }
                cost={30}
              ></TutorTileCard>
            )}
          </div>
        </div>
        <div className="main-columns">
          {/* <h2> Third column </h2>
          <p> This is Third column of our grid system</p> */}
          <TutorModal toggle={modal} action={open} selectedTutor={tutor} />
        </div>
      </div>
    </div>
  );
}

export default SearchTutor;
