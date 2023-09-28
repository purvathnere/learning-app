// Sample JSON 
const jsonData = [
  {
    name: "Code With Harry",
    topic: "Java tutorial in hindi",
    videoLink: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/rV_3Lewxx6o?si=P2dFPtM4Jnmg8t88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Code With Harry Fastest Way To Become a Software Developer",
    topic: "Java tutorial in hindi",
    videoLink:'<iframe width="100%" height="315" src="https://www.youtube.com/embed/4aE58wbXdqU?si=sAfFk3K3F2k-bqOf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "College Wallah",
    topic: "Complete C++ Tutorial in One Shot 2023 | Beginner To Advance | Basics Of C++ Programming",
    videoLink:'<iframe width="100%" height="315" src="https://www.youtube.com/embed/e7sAf4SbS_g?si=24zjziUUpfBnw7Wj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name:'WsCube Tech',
    topic:'Python Full Course for Beginners',
    videoLink :'<iframe width="100%" height="315" src="https://www.youtube.com/embed/sCOw5y1RQpY?si=BTPdI0ekRXsAXwoC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },
  {
    name:'Telusko',
    topic:'Java Tutorial for Beginners 2023',
    videoLink :'<iframe width="100%" height="315" src="https://www.youtube.com/embed/BGTx91t8q50?si=l2tviZNrMi-Mhcq5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },
  {
    name:'Shraddha | Apna College',
    topic:'Java OOPs in One Shot | Object Oriented Programming | Java Language ',
    videoLink :'<iframe width="100%" height="315" src="https://www.youtube.com/embed/bSrm9RXwBaI?si=EJrBk6H6W606EyaB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },
  {
    name:'Sheryians Coding School',
    topic:'JavaScript Crash Course',
    videoLink :'<iframe width="100%" height="315" src="https://www.youtube.com/embed/htznIeWKgg8?si=6tGILebxJwuzKwWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },
  {
    name:'Shraddha | Apna College',
    topic:'Git and GitHub Tutorial',
    videoLink :'<iframe width="100%" height="315" src="https://www.youtube.com/embed/Ez8F0nW6S-w?si=Ccfm73zLG1v39N2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },

  // add more
  // {
  //   name:'',
  //   topic:'',
  //   videoLink :''
  // },
  
];








// Function to search JSON data based on input
function searchJSON(query) {
  const results = jsonData.filter((item) => {
    // You can customize the search logic here
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.topic.toLowerCase().includes(query.toLowerCase())
    );
  });
  return results;
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const autocompleteResults = document.getElementById("autocompleteResults");
  const searchButton = document.getElementById("searchButton");
  const resultsContainer = document.getElementById("results");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim();
    const autocompleteSuggestions = searchJSON(query);

    // Clear previous autocomplete suggestions
    autocompleteResults.innerHTML = "";

    // Display autocomplete suggestions
    if (query.length > 0 && autocompleteSuggestions.length > 0) {
      autocompleteSuggestions.forEach((result) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.classList.add("autocomplete-item");
        suggestionItem.textContent = `${result.name} - ${result.topic}`;
        suggestionItem.addEventListener("click", function () {
          searchInput.value = result.name;
          autocompleteResults.style.display = "none";
        });
        autocompleteResults.appendChild(suggestionItem);
      });
      autocompleteResults.style.display = "block";
    } else {
      autocompleteResults.style.display = "none";
    }
  });

  searchButton.addEventListener("click", function () {
    autocompleteResults.style.display = "none";
    const query = searchInput.value.trim();

    if (query === "") {
      resultsContainer.innerHTML = "Please any topic or teacher's name";
    } else {
      const searchResults = searchJSON(query);

      // Clear previous results
      resultsContainer.innerHTML = "";

      // Display results
      if (searchResults.length === 0) {
        resultsContainer.innerHTML = "No results found.";
      } else {
        searchResults.forEach((result) => {
          const resultElement = document.createElement("div");
          resultElement.classList.add("col-lg-5");          
          resultElement.innerHTML = `${result.videoLink}`;
          resultsContainer.appendChild(resultElement);
        });
      }
    }
  });
});
