module.exports = (input) => {
    // zet een input van 1-12 om naar de naam van de maand in het Nederlands
    const months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
    return `${months[input - 1]}`;
};