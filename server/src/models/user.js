class User {
    constructor(firstName, lastName, middleName,
        password, userId, username, courses, phone, email, major,
        hours, longBio, shortBio, pfp) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.password = password;
        this.userId = userId;
        this.username = username;
        this.courses = courses;
        this.phone = phone;
        this.email = email;
        this.major = major;
        this.hours = hours;
        this.longBio = longBio;
        this.shortBio = shortBio;
        this.pfp = pfp;
    }
}
module.exports = User