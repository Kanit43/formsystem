export class UserInfo {
    constructor (role, studentId, firstName, lastName, uid, email) {
        this.role = role
        this.studentId = studentId
        this.firstName = firstName
        this.lastName = lastName
        this.uid = uid
    }
    toString() {
        return "Userinfo: { role: "+ this.role + " studentId: " + this.studentId + " }"
    }
}

export const userInfoConverter = {
    toFirestore: (info) => {
        return {
            role: info.role,
            studentId: info.studentId,
            firstName: info.firstName,
            lastName: info.lastName
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new UserInfo(data.role, data.studentId, data.firstName, data.lastName, snapshot.id);
    }
};