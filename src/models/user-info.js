class UserInfo {
    constructor (role, studentId) {
        this.role = role
        this.studentId = studentId
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
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new UserInfo(data.role, data.studentId);
    }
};