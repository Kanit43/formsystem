class formEntity {
    constructor (name, active, form, json, id, code) {
        this.id = id
        this.name = name
        this.active = active
        this.form = form
        this.json = json
        this.code = code
    }
}

export const formEntityConverter = {
    toFirestore: (form) => {
        return {
            name: form.name,
            active: form.active,
            form: form.form,
            json: form.json,
            code: form.code
        }
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new formEntity(data.name, data.active, data.form, data.json, snapshot.id, data.code);
    }
};