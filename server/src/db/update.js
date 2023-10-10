const { addItem,modifyItem } = require("./db")

module.exports = {
    /**
     * Update the username for a user
     * @param {string} userId Database id for the user
     * @param {string} newUsername New username, must be unique
     */
    updateUsername: async function updateUsername(userId, newUsername) {
        return modifyItem("User",userId,"username", newUsername)
    },
    /**
     * Update the major for a user
     * @param {string} userId Database id for the user
     * @param {string} newMajorId Database id for the new user major
     */
    updateUserMajor: async function updateUserMajor(userId, newMajorId) {
        return modifyItem("User",userId,"major", newMajorId)
    },
    /**
     * Update the phone number for a user
     * @param {string} userId Database id for the user
     * @param {string} newPhone New phone number for the user
     */
    updateUserPhone: async function updateUserPhone(userId, newPhone) {
        return modifyItem("User",userId,"phone", newPhone)
    },
    /**
     * Update the email for a user
     * @param {string} userId Database id for the user
     * @param {string} newEmail New email for the user
     */
    updateUserEmail: async function updateUserEmail(userId, newEmail) {
        return modifyItem("User",userId,"email", newEmail)
    },
        /**
     * Update the longbio for a user
     * @param {string} userId Database id for the user
     * @param {string} newLongBio New phone number for the user
     */
    updateUserBio: async function updateUserBio(userId, newLongBio) {
        return modifyItem("User",userId,"longBio", newLongBio)
    },
        /**
     * Update the password hash for a user
     * @param {string} userId Database id for the user
     * @param {string} newPasswordHash New password hash for the user
     */
    updateUserPassword: async function updateUserPassword(userId, newPasswordHash) {
        return modifyItem("User",userId,"password", newPasswordHash)
    },
    /**
     * Update the user rating
     * @param {string} userId Database id for the user
     * @param {number} newRating New rating for the user
     */
    updateUserRating: async function updateUserRating(userId, newRating) {
        return modifyItem("User",userId,"rating", newRating)
    },
        /**
     * Update the user rating
     * @param {string} userId Database id for the user
     * @param {ImageData} newProfilePic New profile picture for the user
     */
    updateUserProfilePic: async function updateUserProfilePic(userId, newProfilePic) {
        return modifyItem("User",userId,"profilePic", newProfilePic)
    },

    /**
     * Update tutor bio
     * @param {string} tutorId Database id for the tutor
     * @param {string} newTutorBio New tutor bio
     */
    updateTutorBio: async function updateTutorBio(tutorId, newTutorBio) {
        return modifyItem("Tutor",tutorId,"shortBio", newTutorBio)
    },
    /**
     * Update the tutor background check
     * @param {string} tutorId Database id for the user
     * @param {boolean} newBkgrCheck New background check value
     */
    updateTutorBkgrCheck: async function updateTutorBkgrCheck(tutorId, newBkgrCheck) {
        return modifyItem("Tutor",tutorId,"backgroundCheck", newBkgrCheck)

    },
    /**
     * Update the tutor hours
     * @param {string} tutorId Database id for the user
     * @param {number} newTotalHours New hours for the tutor
     */
    updateTutorHours: async function updateTutorHours(tutorId, newTotalHours) {
        return modifyItem("Tutor",tutorId,"totalHours", newTotalHours)
    },
    /**
     * Update the tutors weekly availability
     * @param {string} tutorId Database id for the user
     * @param {Array<Date>} newWeeklyAvail New rating for the user
     */
    updateTutorWeeklyAvail: async function updateTutorWeeklyAvail(tutorId, newWeeklyAvail) {
        return modifyItem("Tutor",tutorId,"weeklyAvailability", newWeeklyAvail)
    },
    /**
     * Update the tutors availability exception dates
     * @param {string} tutorId Database id for the user
     * @param {Array<Date>} newExceptionsAvailability New date exceptions for availability
     */
    updateTutorExceptAvail: async function updateTutorExceptAvail(tutorId, newExceptionsAvailability) {
        return modifyItem("Tutor",tutorId,"exceptionsAvailability", newExceptionsAvailability)
    },
    /**
     * Update the major name
     * @param {string} majorId Database id for the major
     * @param {string} newMajorName New major name
     */
    updateMajorName: async function updateMajorName(majorId,newMajorName){
        return modifyItem("Major",majorId,"majorName", newMajorName)
    },
    /**
     * Update the course name
     * @param {string} courseId Database id for the course
     * @param {string} newCourseName New name for the course
     */
    updateCourseName: async function updateCourseName(courseId, newCourseName) {
        return modifyItem("Course",courseId,"courseName", newCourseName)
    },
    /**
     * Update the course number
     * @param {string} courseId Database id for the cours
     * @param {string} newCourseNumber New course number
     */
    updateCourseNumber: async function updateCourseNumber(courseId, newCourseNumber) {
        return modifyItem("Course",courseId,"courseNumber", newCourseNumber)

    },
    /**
     * Update the course credit hours
     * @param {string} courseId Database id for the cours
     * @param {number} newCreditHours New course credit hours
     */
    updateCourseCrdHours: async function updateCourseCrdHours(courseId, newCreditHours) {
        return modifyItem("Course",courseId,"creditHours", newCreditHours)
    },
    /**
     * Update the appointment start date and time
     * @param {string} appointmentId Database id for the appointment
     * @param {Date} newDateTime New start date and time for the appointment
     */
    updateAppDateTime: async function updateAppDateTime(appointmentId, newDateTime){
        return modifyItem("Appointment",appointmentId,"dateTime",newDateTime)
    },
        /**
     * Update the appointment length in minutes
     * @param {string} appointmentId Database id for the appointment
     * @param {number} newLength New appointment length in minutes
     */
    updateAppLength: async function updateAppLength(appointmentId, newLength){
        return modifyItem("Appointment",appointmentId,"length",newLength)
    },
    /**
     * Update the appointment medium, online or not
     * @param {string} appointmentId Database id for the appointment
     * @param {boolean} newOnline New appointment medium
     */
    updateAppMedium: async function updateAppMedium(appointmentId, newOnline){
        return modifyItem("Appointment",appointmentId,"online",newOnline)
    },
    /**
     * Update the appointment location
     * @param {string} appointmentId Database id for the appointment
     * @param {string} newLocation New appointment location
     */
    updateAppLocation: async function updateAppLocation(appointmentId, newLocation){
        return modifyItem("Appointment",appointmentId,"location",newLocation)
    },
    /**
     * Update the appointment notes
     * @param {string} appointmentId Database id for the appointment
     * @param {string} newNotes New appointment notes
     */
    updateAppNotes: async function updateAppNotes(appointmentId, newNotes){
        return modifyItem("Appointment",appointmentId,"notes",newNotes)
    },
    /**
     * Update the appointment notes
     * @param {string} appointmentId Database id for the appointment
     * @param {number} newRating New appointment rating
     */
    updateAppRating: async function updateRating(appointmentId, newRating){
        return modifyItem("Appointment",appointmentId,"rating",newRating)
    },
    /**
     * Update the appointment notes
     * @param {string} appointmentId Database id for the appointment
     * @param {string} newReview New appointment review
     */
    updateAppReview: async function updateAppReview(appointmentId, newReview){
        return modifyItem("Appointment",appointmentId,"review",newReview)
    },
    /**
     * Update the appointment notes
     * @param {string} appointmentId Database id for the appointment
     * @param {string} newUserId Updates the user id for the appointment
     */
    updateAppUserId: async function updateAppUserId(appointmentId, newUserId) {
        return modifyItem("Appointment",appointmentId,"userId",newUserId)
    }
}