function liveSearch(nimi) {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var searchResult = document.getElementById("searchResult");
    if (searchInput === "") {
      searchResult.innerHTML = ""
    }

    nimi = nimi.replace(/ /g, "|")

    const TOKIPONA_WORDS = tokiponaWords.split("\n")

    if (nimi.length > 1) {
      let PATTERN = new RegExp(`(${(nimi)})`, "gm");
      let RESULTS = TOKIPONA_WORDS.filter(function(str) {
        return PATTERN.test(str);
      });

      RESULTS = RESULTS.join("=")
      // console.log(RESULTS);
      let results = RESULTS.toString()
      .replace(/\t/g, "<br>")
      .replace(/\=/g, "<hr>")
      // .replace(/([ก-๙]*) : ([A-Za-z \(\)\'\"]*)/g, "<span onclick=\"letSearch(this)\">$1</span> : <span onclick=\"letSearchEo(this)\">$2</span>")
      // .replace(/([ก-๙]*)$/g, "<span onclick=\"letSearch(this)\">$1</span>")
      // console.log(results);

      document.getElementById("liveSearch").innerHTML = results 
    } else {
      document.getElementById("liveSearch").innerHTML = ""
    }
  } 
