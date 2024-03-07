import run from "./run.js"

addEventListener('DOMContentLoaded', () => {
    const params = {
        catalog: "collaborators"
    }

    const el = document.querySelector("#app_root")
    if (el) {
        const result = run(params)
        el.innerHTML = JSON.stringify(result)
    }
})
