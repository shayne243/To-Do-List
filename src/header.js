const headerContent = () => {
    const header = document.getElementById("header");
    const headerSection = document.createElement("div");
    const mainHeading = document.createElement("h1");
    headerSection.setAttribute("style", "text-align: center; width: 275; background-color: #ffd65a; border-radius: 10px; margin: auto; display: flex; flex-direction: column; border: solid white 0.5px;");
    mainHeading.setAttribute("style", "margin-top: 0px; margin-bottom: 0px; font-family: Caveat");
    mainHeading.innerHTML = "StuffToDo";
    headerSection.appendChild(mainHeading);
    const headingDesc = document.createElement("p");
    headingDesc.setAttribute("style", "margin-top: 0px; margin-bottom: 5px; font-size: 20px; font-family: Segoe UI, Times New Roman");
    headingDesc.innerHTML = "<em>Get organized the right way...</em>"
    headerSection.appendChild(headingDesc);
    header.appendChild(headerSection);
}
export {headerContent};