// var words = ['EXPLORE', 'ORDER', 'RESERVE','BROWSE']; 
// var c = 0;
// const wordElement = document.getElementById("text");

// function changeWord() {
//     wordElement.classList.remove("fade-in");
//     wordElement.classList.add("fade-out");

//     setTimeout(() => {
//         wordElement.textContent = words[c];
//         wordElement.classList.remove("fadeout");
//         wordElement.classList.add("fadein");

//         c = (c + 1) % words.length;
//     }, 1000);
// }

// changeWord();
// setInterval(changeWord, 3000);
// var words = ['EXPLORE', 'ORDER', 'RESERVE', 'BROWSE']; 
// var index = 0;
// const wordElement = document.getElementById("text");

// function changeWord() {
//     wordElement.classList.remove("fadein");
//     wordElement.classList.add("fadeout");

//     setTimeout(() => {
//         wordElement.textContent = words[index];
//         wordElement.classList.remove("fadeout");
//         wordElement.classList.add("fadein");

//         index = (index + 1) % words.length;
//     }, 1000);
// }

// changeWord();
// setInterval(changeWord, 3000);

var words = ['EXPLORE', 'ORDER', 'RESERVE', 'BROWSE']; 
        var index = 0;
        const wordElement = document.getElementById("text");

        function changeWord() {
            wordElement.classList.add("slide-out");

            setTimeout(() => {
                wordElement.classList.remove("slide-out");
                wordElement.classList.add("off-screen");
                setTimeout(() => {
                    wordElement.textContent = words[index];
                    wordElement.classList.remove("off-screen");
                    wordElement.classList.add("slide-in");
                    index = (index + 1) % words.length;
                }, 50); // Ensure the word is off-screen before sliding in
            }, 950); // Match this duration to the CSS transition duration minus a little buffer
        }

        changeWord();
        setInterval(changeWord, 3000);