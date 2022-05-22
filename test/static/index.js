function search(searchword) {
    if (searchword == "") {
        alert("Please enter a search word")
    } else {
        $.ajax({
            type: "POST",
            url: "/getnews",
            data: { keyword: searchword },
            cache: false,
            beforeSend: function () {
                $(".loading_msg").show();
            },
            complete: function () {
                $(".loading_msg").hide();
            }
        }).done(function (o) {
            displayNews()
        });
    }
}

function displayNews() {
    url = "./news.js";
    $.getScript(url, function (data) {
        var news = eval(data);
        var body = document.getElementById("items");
        while (body.firstChild) {
            body.removeChild(body.firstChild)
        };
        console.log(news);
        for (var i = 0; i < news.length; i++) {
            var container = document.createElement("div");
            container.setAttribute("class", "container2")
            var imageContainer = document.createElement("div")
            imageContainer.setAttribute("class", "image")
            var image = document.createElement("img")
            image.setAttribute("width", "200")
            image.setAttribute("height", "130")
            image.setAttribute("src", news[i].urlToImage)
            imageContainer.appendChild(image)
            container.appendChild(imageContainer)
            var contentContainer = document.createElement("div")
            contentContainer.setAttribute("class", "content")
            var title = document.createElement("h2")
            title.textContent = news[i].title
            contentContainer.appendChild(title)
            var source = document.createElement("h5")
            source.textContent = news[i].source.name
            contentContainer.appendChild(source)
            var info = document.createElement("p")
            info.textContent = news[i].description
            contentContainer.appendChild(info)
            var info2 = document.createElement("p")
            info2.textContent = news[i].content
            contentContainer.appendChild(info2)
            var Author = document.createElement("h4")
            Author.textContent = news[i].author
            contentContainer.appendChild(Author)
            var Date = document.createElement("h4")
            Date.textContent = news[i].publishedAt
            contentContainer.appendChild(Date)
            var link = document.createElement("h4")
            var url = document.createElement("a")
            url.setAttribute("target", "_blank")
            url.textContent = "Link"
            url.setAttribute("href", news[i].url)
            link.appendChild(url)
            contentContainer.appendChild(link)
            container.appendChild(contentContainer)
            body.appendChild(container)
        };
    });
}