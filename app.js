const glossary = [
  {
    term: "HTML",
    definition: "The markup language used to structure content on a web page.",
  },
  {
    term: "CSS",
    definition: "A language for styling the appearance of HTML elements.",
  },
  {
    term: "JavaScript",
    definition: "The programming language that makes web pages interactive.",
  },
  {
    term: "DOM",
    definition:
      "The Document Object Model — the browser's live, editable tree of the page.",
  },
  {
    term: "Element",
    definition:
      "A single node in the page, such as a heading, paragraph, or button.",
  },
  {
    term: "Event",
    definition:
      "Something that happens on the page, like a click or keypress, that code can respond to.",
  },
  {
    term: "Function",
    definition:
      "A reusable block of code that performs a task and can return a value.",
  },
  {
    term: "Variable",
    definition: "A named container that stores a value for later use.",
  },
  {
    term: "Array",
    definition: "An ordered list of values, written with square brackets.",
  },
  {
    term: "Object",
    definition: "A collection of key/value pairs, written with curly braces.",
  },
  {
    term: "JSON",
    definition:
      "A text format for storing and exchanging data, based on objects and arrays.",
  },
  {
    term: "Fetch",
    definition: "A browser function for loading data from a file or server.",
  },
  {
    term: "Selector",
    definition:
      "A pattern used to find and target elements, e.g. by class or id.",
  },
  {
    term: "Attribute",
    definition: "Extra information on an element, such as src, href, or alt.",
  },
  {
    term: "Callback",
    definition: "A function passed to another function to run at a later time.",
  },
];

document.getElementById("searchWrapper").style.display = "flex";
document.getElementById("searchWrapper").style.alignItems = "center";
document.getElementById("search").style.height = "20px";

sortedGlossary = glossary.sort((a, b) => a.term.localeCompare(b.term));


function convertString(str) {
  return str.toLowerCase().replaceAll(" ", "");
}

document.getElementById("search").addEventListener("input", function () {
  const searchValue = convertString(document.getElementById("search").value);
  let results = sortedGlossary.filter((word) => {
    return convertString(word.term).includes(searchValue);
  });

  if (results.length === 0) {
    results = sortedGlossary.filter((word) => {
      return convertString(word.definition).includes(searchValue);
    });
  }

  renderGlossary(results);
});

function renderGlossary(words) {
  document.getElementById("wrapper").innerHTML = "";
  const countElement = document.createElement("div");
  countElement.style.fontWeight = "bold";
  countElement.style.marginBottom = "10px";
  countElement.style.marginTop = "10px";
  countElement.innerHTML = `Showing ${words.length} of ${sortedGlossary.length} terms.`;
  document.getElementById("wrapper").appendChild(countElement);

  if (words.length === 0) {
    document.getElementById("wrapper").appendChild(countElement);
    const errorMsg = document.createElement("div");
    errorMsg.innerHTML = "No terms found based on your search.";
    document.getElementById("wrapper").appendChild(errorMsg);
    return;
  }

  words.forEach((word) => {
    const ele = document.createElement("div");
    ele.innerHTML = word.term + ": " + word.definition;
    document.getElementById("wrapper").appendChild(ele);
  });
}

renderGlossary(sortedGlossary);
