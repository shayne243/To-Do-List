const headerContent = () => {
    const header = document.getElementById("header");
    const headerSection = document.createElement("div");
    const mainHeading = document.createElement("h1");
    headerSection.setAttribute("style", "text-align: center; padding: 15px; border-radius: 10%; margin: auto; display: flex; flex-direction: column; border: solid; width: 500;");
    mainHeading.setAttribute("style", "margin: 0px; font-family: Caveat");
    mainHeading.innerHTML = "StuffToDo";
    headerSection.appendChild(mainHeading);
    const headingDesc = document.createElement("p");
    headingDesc.setAttribute("style", "font-size: 20px; margin: 2px; font-family: Segoe UI, Times New Roman");
    headingDesc.innerHTML = "<em>Get organized the right way...</em>"
    headerSection.appendChild(headingDesc);
    header.appendChild(headerSection);
}
export {headerContent};