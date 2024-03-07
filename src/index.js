import run from "./run.js"

const params = {
    catalog: "collaborators"
}

const el = document.querySelector("#app1")
if (el) {
    const result = run(params)
    el.innerHTML = JSON.stringify(result)
}
