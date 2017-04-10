  var createNewCatList = function(){
    var list = document.createElement('ul')
    list.classList.add('cat')
    return list
  }

  var createCatNameLine = function(name){
    var nameLine = document.createElement('li')
    nameLine.innerText = name
    return nameLine
  }

  var createCatFoodLine = function(faveFood){
    var foodLine = document.createElement('li')
    foodLine.innerText = faveFood
    return foodLine
  }

  var addCatImageLine = function(imgSource){
    var image = document.createElement('img')
    image.width = '500'
    image.src = imgSource

    var imageLine = document.createElement('li')
    imageLine.appendChild(image)
    return imageLine
  }

  var appendCatElements = function(list, nameLine, foodLine, imageLine){
    list.appendChild(nameLine)
    list.appendChild(foodLine)
    list.appendChild(imageLine)

    var catsSection = document.querySelector('#cats')
    catsSection.appendChild(list)    
  }

  var addCat = function(name, faveFood, imgSource){
    var list = createNewCatList()
    var nameLine = createCatNameLine(name)
    var foodLine = createCatFoodLine(faveFood)
    var imageLine = addCatImageLine(imgSource)
    
    appendCatElements(list, nameLine, foodLine, imageLine)
  }

  app = function(){
    addCat("Barry", "whiskas", "https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header")
  }

  window.onload = app