  var createNewCatList = function(){
    var list = document.createElement('ul')
    list.classList.add('cat')
    return list
  }

  var createCatNameLine = function(name){
    var nameLine = document.createElement('li')
    nameLine.innerText = 'Name: ' + name
    return nameLine
  }

  var createCatFoodLine = function(faveFood){
    var foodLine = document.createElement('li')
    foodLine.innerText = 'Favourite food: ' + faveFood
    return foodLine
  }

  var addCatImageLine = function(imgSource){
    var image = document.createElement('img')
    image.width = '500'
    image.height = '300'
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

  var cats = 
  [
  {name: 'Boba', 
  favFood: 'Sock fluff', 
  img: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg' 
  },
  {name: 'Barnaby', 
  favFood: 'Tuna', 
  img: 'https://i.ytimg.com/vi/-a75sRCC7Bg/maxresdefault.jpg'
  },
  {name: 'Max', 
  favFood: 'Whiskas Temptations', 
  img: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'
  },
  {name: 'Barry', 
  favFood: 'Turnip', 
  img: 'http://s2.dmcdn.net/Ub1O8/1280x720-mCQ.jpg'
  }]

  app = function(){
    cats.forEach(function(cat){
      addCat(cat.name, cat.favFood, cat.img)
    })
  }

  window.onload = app