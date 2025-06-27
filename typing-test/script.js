// Words Used
words = [
  "JavaScript",
  "is",
  "a",
  "powerful",
  "language",
  "used",
  "for",
  "web",
  "development",
  "and",
  "application",
  "building",
  "It",
  "supports",
  "functions",
  "objects",
  "arrays",
  "events",
  "and",
  "many",
  "modern",
  "features",
  "In",
  "this",
  "example",
  "we",
  "will",
  "shuffle",
  "an",
  "array",
  "of",
  "words",
  "and",
  "generate",
  "a",
  "new",
  "text",
  "output",
  "The",
  "shuffle",
  "algorithm",
  "used",
  "here",
  "is",
  "Fisher",
  "Yates",
  "which",
  "ensures",
  "fair",
  "randomness",
  "First",
  "we",
  "define",
  "our",
  "array",
  "Then",
  "we",
  "apply",
  "the",
  "shuffle",
  "function",
  "After",
  "that",
  "we",
  "join",
  "the",
  "words",
  "together",
  "to",
  "form",
  "a",
  "string",
  "The",
  "final",
  "output",
  "will",
  "display",
  "inside",
  "a",
  "div",
  "called",
  "output",
  "You",
  "can",
  "click",
  "the",
  "button",
  "multiple",
  "times",
  "to",
  "see",
  "different",
  "random",
  "combinations",
  "This",
  "example",
  "is",
  "useful",
  "for",
  "learning",
  "array",
  "manipulation",
  "and",
  "basic",
  "DOM",
  "interaction",
  "Feel",
  "free",
  "to",
  "edit",
  "the",
  "array",
  "and",
  "add",
  "more",
  "words",
  "or",
  "sentences",
  "according",
  "to",
  "your",
  "needs",
  "Also",
  "you",
  "can",
  "style",
  "the",
  "output",
  "div",
  "to",
  "make",
  "it",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "lazy",
  "dog",
  "computer",
  "programming",
  "code",
  "algorithm",
  "data",
  "structure",
  "dynamic",
  "interface",
  "responsive",
  "design",
  "framework",
  "library",
  "syntax",
  "debug",
  "variable",
  "constant",
  "loop",
  "condition",
  "statement",
  "module",
  "package",
  "import",
  "export",
  "function",
  "class",
  "object",
  "method",
  "property",
  "event",
  "listener",
  "callback",
  "promise",
  "async",
  "await",
  "server",
  "client",
  "request",
  "response",
  "database",
  "query",
  "table",
  "record",
  "field",
  "technology",
  "internet",
  "browser",
  "mobile",
  "application",
  "software",
  "hardware",
  "network",
  "security",
  "encryption",
  "authentication",
  "session",
  "cookie",
  "cache",
  "memory",
  "processor",
  "performance",
  "optimization",
  "version",
  "control",
  "repository",
  "commit",
  "branch",
  "merge",
  "conflict",
  "update",
  "upgrade",
  "feature",
  "bug",
  "fix",
  "test",
  "unit",
  "integration",
  "deploy",
  "production",
  "development",
  "environment",
  "script",
  "style",
  "template",
  "component",
  "render",
  "state",
  "props",
  "virtual",
  "reality",
  "machine",
  "learning",
  "artificial",
  "intelligence",
  "cloud",
  "computing",
  "service",
];

// Elemnets Variables
const textContainer = document.getElementById("text-container");
const timerElement = document.getElementById("timer");
const finalScore = document.getElementById("final-score");
const tryAgainBtn = document.getElementById("try-again-btn");

let totalTyped = "";
let currentCharIndex = 0;
let errors = 0;
let longText = generateLongText();
let timeLeft = 60;
let timerInterval;
let typingStarted = false;

// Shuffle Function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

//Combine shuffled words into one long string with spacing
function generateLongText() {
  const shuffledWords = shuffleArray([...words]);
  return shuffledWords.join(" ");
}

// Start countdown timer
function startTimer() {
  if (!typingStarted) {
    typingStarted = true;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endTest();
      }
    }, 1000);
  }
}

// End the typing test and display the final score
function endTest() {
  timerElement.textContent = "Time's up!";
  finalScore.textContent = `Final WPM: ${CalculateWPM()} `;
  textContainer.style.display = "none";
  tryAgainBtn.style.display = "block";
}

// Calculate WPM
function CalculateWPM() {
  const timeTakenInMinutes = (60 - timeLeft) / 60;
  const wordsTyped = totalTyped.trim().split(/\s+/).length;
  const rawWPM = Math.round(wordsTyped / timeTakenInMinutes);
  const adjustedWPM = Math.max(rawWPM - errors, 0);
  return adjustedWPM;
}
function CalculateWPM2__() {
  const wordsTyped = totalTyped.trim().split(/\s+/).length;
  const baseWPM = Math.round((wordsTyped / 60) * 60);
  const adjustedWPM = Math.max(baseWPM - errors, 0);
  return adjustedWPM;
}

// handle typing
document.addEventListener("keydown", (e) => {
  // if backspace
  startTimer();
  if (e.key === "Backspace") {
    if (totalTyped.length > 0) {
      currentCharIndex = Math.max(currentCharIndex - 1, 0);
      totalTyped = totalTyped.slice(0, -1);
    }
  } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    totalTyped += e.key;
    currentCharIndex++;
  }
  // console.log(
  //   `Key:${e.key}, Typed: ${totalTyped}, Current Index: ${currentCharIndex}`
  // );

  const textArray = longText.split("");
  textContainer.innerText = "";

  errors = 0;

  // Check for errors
  for (let i = 0; i < textArray.length; i++) {
    const span = document.createElement("span");

    if (i < totalTyped.length) {
      if (totalTyped[i] === textArray[i]) {
        span.classList.add("correct");
      } else {
        span.classList.add("error");
        errors++;
      }
    }
    span.textContent = textArray[i];
    textContainer.appendChild(span);
  }

  // Scrolling left and right
  if (totalTyped.length >= 20) {
    const scrollAmount = (totalTyped.length - 20) * 14;
    textContainer.scrollLeft = scrollAmount;
  }
});

// Reset the test
function resetTest() {
  clearInterval(timerInterval);
  timeLeft = 60;
  timerElement.textContent = `Time Left: ${timeLeft}s`;
  finalScore.textContent = "";
  textContainer.style.display = "block";
  tryAgainBtn.style.display = "none";
  totalTyped = "";
  typingStarted = false;
  currentCharIndex = 0;
  errors = 0;
  textContainer.scrollLeft = 0;
  longText = generateLongText();
  init();
}

// Initializing the test
function init() {
  if (isMobileDevice()) {
    showMobileMessage();
  } else {
    textContainer.innerText = longText;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
  }
}

// Try agin button event listener
tryAgainBtn.addEventListener("click", resetTest);

// Detect if the device is mobile
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 800;
}

// Show message for device is mobile
function showMobileMessage() {
  textContainer.textContent =
    "This test is not optimized for mobile devices. Please use a desktop or laptop for the best experience.";
}

// Startup
init();
