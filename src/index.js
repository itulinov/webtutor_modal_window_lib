import run from "./run.js"

addEventListener('DOMContentLoaded', () => {
    const params = {
        catalog: "collaborators",
        fields: "id,fullname,code",
        find: "id,fullname,code",
        value: "Тулинова",
        ids: "",
        'user-where': "1=1",
        ssql: "",
        connection: "",
    }

    const el = document.querySelector("#app_root")
    if (el) {
        const res = run(params)
        res.then((data) => {
            el.append(
                JSON.stringify(data, null, 2)
            )
        })
    }
})
