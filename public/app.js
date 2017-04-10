  var addCat = function(name, faveFood, imgSource){
    var list = document.createElement('ul')
    list.classList.add('cat')

    var nameLine = document.createElement('li')
    nameLine.innerText = name

    var foodLine = document.createElement('li')
    foodLine.innerText = faveFood

    var image = document.createElement('img')
    image.width = '500'
    image.src = imgSource

    var imageLine = document.createElement('li')
    imageLine.appendChild(image)

    list.appendChild(nameLine)
    list.appendChild(foodLine)
    list.appendChild(imageLine)

    var catsSection = document.querySelector('#cats')
    catsSection.appendChild(list)
  }

  app = function(){
    addCat("Barry", "whiskas", "https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header")
  }

  window.onload = app