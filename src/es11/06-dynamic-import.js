const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import('./modules/module.mjs')
    console.log(module);
    module.hello
})
