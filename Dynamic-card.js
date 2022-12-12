var article = [{
        title:"Anarany",
        images:{src:"girl motivate no text.jpg"},
        decription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        URL:"#",
        class:"left"
    },
    {
        title:"Anarany-2",
        images:{src:"girl motivate no text.jpg"},
        decription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        URL:"#",
        class:"center"
    },

    {
        title:"Anarany-3",
        images:{src:"girl motivate no text.jpg"},
        decription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        URL:"#",
        class:"right"
    }
]

var data= article

for (let i = 0; i < data.length; i++) {

    const $digiCard = document.createElement("div")
    $digiCard.classList.add("digiCard");

    const $digiCardOne = document.createElement("div")
    $digiCardOne.classList.add(article[i].class)
    
    const $img = document.createElement("img")
    $img.src = article[i].images.src,

    $digiCardOne.append($img);

    const $h1 = document.createElement("h1")
    $h1.textContent =  article[i].title
    // $h1[2].style.Color = "blue"
    $digiCardOne.append($h1)

    const $p  =  document.createElement("p")
    $p.textContent = article[i].decription;
    $digiCardOne.append($p);

    const $a = document.createElement("a")
    $a.textContent = "Voir plus";
    $a.href = article[i].URL
    $a.classList.add("bouton")
    $digiCardOne.append($a)

    $digiCard.append($digiCardOne);
    console.log(article[i])


    document.body.append($digiCard)


    // function ArticlePush( title, image = {src}, decription,URL ) {

    //     if (data[2]){
    //         var articleInfo = {
    //             title: title,
    //             images: src,
    //             decription: decription,
    //             URL: URL,
    //         }
    //         data.push(articleInfo)
    //     }
        
        
    // }
    // ArticlePush("Niaina" , "girl motivate no text.jpg","Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "#");
    // ArticlePush({} , "abel");
    // ArticlePush({} , "koto");
    
    
}
 



 





