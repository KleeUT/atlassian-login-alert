updatePageContent();
addSaveFuncionality()
listenAndRespondToContentScript();

function addSaveFuncionality() {
    document.getElementById('regex-save').addEventListener('click', function () {
        let input = document.getElementById('regex-input').value;
        var isValid = true;
        try {
            let regex = new RegExp(removeLeadingAndTrailingSlashes(input));
            localStorage.setItem("regex", regex);
            isValid = true;
        } catch (e) {
            isValid = false;
        }

        document.getElementById('regex-error').innerHTML = isValid ? "" : `Invalid regular expression: ${input}`;
        document.getElementById('regex-success').innerHTML = isValid ? "Saved" : "";
    });
}

function removeLeadingAndTrailingSlashes(input) {
    if (!input) { return input; }
    let trimmedInput = input[0] === '/' ? input.substr(1, input.length) : input;
    trimmedInput = trimmedInput[trimmedInput.length - 1] === '/' ? trimmedInput.substr(0, trimmedInput.length - 1) : trimmedInput;
    return trimmedInput;
}

function updatePageContent() {
    let storedRegex = localStorage.getItem("regex");
    document.getElementById('regex-input').value = storedRegex;
}