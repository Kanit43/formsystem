import { collection, getDocs, updateDoc, doc, getDoc, query, where } from "firebase/firestore"
import _ from "lodash"
import { create } from "zustand"
import { db } from "./firebase"
import { formEntityConverter } from "./models/form-entity"
import { userInfoConverter } from "./models/user-info"

const formStore = (set) => ({
    form: [],
    fetch: async () => {
        const docSnap = await getDocs(collection(db, "forms").withConverter(formEntityConverter))
        if (!docSnap.empty) {
            let data = []
            docSnap.forEach(v => data.push(v.data())) 
            set({ form: _.orderBy(data, "code", "asc") })
        }
    },
    updateStatus: async (id, status) => {
        await updateDoc(doc(db, "forms", id), {active: status})
    },
    updateForm: async (id, data) => {
        await updateDoc(doc(db, "forms", id), data)
    }
})

export const useFormStore = create(formStore)

const historyStore = (set) => ({
    histories: [],
    fetch: async (studentUID) => {
        const formSnap = studentUID != null ?  await getDocs(query(collection(db, "histories"), where("user_id", "==", studentUID))) 
        : await getDocs(collection(db, "histories"))
        if (!formSnap.empty) {
            let data = []
            _.forEach(formSnap.docs, async (v, index) => {
                const users = await getDoc(doc(db, "users", v.get("user_id")))
                data.push({
                    id: v.id,
                    studentId: users.get("studentId"),
                    formId: v.get("form_id"),
                    json: v.get("json"),
                    createdTime: v.get("created_time").toDate().toDateString(),
                })
                if (index === formSnap.size - 1) set({ histories: data })
            })
        }
        else {
            set({histories : []})
        }
    }
})

export const useHistoriesStore = create(historyStore)

const userStore = (set) => ({
    users: [],
    fetch: async () => {
        const userSnap = await getDocs(collection(db, "users").withConverter().withConverter(userInfoConverter))
        if (!userSnap.empty) {
            set({users: userSnap.docs.map(v => v.data())})
        }
    },
    updateUser: async (id, data) => {
        await updateDoc(doc(db, "users", id), data)
    }
})

export const useUsersStore = create(userStore)