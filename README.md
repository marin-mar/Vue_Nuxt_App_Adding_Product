# Vue_Nuxt_App_Adding_Product

Приложение для добавления/удаления товаров в списке  
SPA на Vue, Vuex, Nuxt  
Верстка по макету из Figma с использованием SFC-компонентов (template - HTML; script - js; style - scss scoped)  
  
Форма добавления товара - валидация на обязательные поля:  
  - название товара, 
  - ссылка на изображение (можно ввести реальную ссылку, либо поставить картинку-заглушку = productCardImg.png), 
  - цена (применяется маска разделения тысячных пробелом, как в карточке товара после добавления),
  - кнопка добавления активируется после заполнения всех обязательных полей при их валидности
  - после успешного добавления появляется сообщение "Товар добавлен"  
  
Фильтр-сортировка списка:  
  - По умолчанию (по дате добавления, от новых к старым),
  - По цене min (от меньшего к большему),
  - По цене max (от большего к меньшему),
  - По наименованию товара  
  
Анимация:  
  - Добавление/удаление товара 
  - Сортировка списка  
  - спиннер-прелоадер перед загрузкой списка
  
Сохранение списка в localStorage для его сохранения в случае перезагрузки страницы  
В мобильной версии разметка сохраняется, соответствие макету достигается за счет единиц в rem  
  
Создать свой список товаров онлайн на gh-pages: https://marin-mar.github.io/Vue_Nuxt_App_Adding_Product/  
  
Скачать и полностью протестировать на своем компьютере:  
Необходимо для запуска = Node.js v16.13.2  
```bash
$ git clone <имя-этого-репозитория> # клонировать репозиторий
$ cd <папка-этого-репозитория-на-вашем-копьютере> # перейти в папку
$ npm install # установить зависимости
$ npm run dev # запустить в режиме разработки на localhost:3000
$ npm run generate # сгенерировать статический spa-проект
$ npm run start # запустить Nuxt-сервер
```
---

Application for adding/removing products in the list  
SPA on Vue, Vuex, Nuxt  
Layout based on a Figma using SRC components (template - HTML; script - js; style - scss scoped)  
  
Product addition form - validation for required fields:
  - product title, 
  - link to the image (you can enter a real link, or put a stub image = productCardImg.png),
  - price (a mask is used to separate the thousandths with a space, as in the product card after adding),
  - the add button is activated after filling in all the required fields if they are valid
  - after successful addition, the message "Product added" appears  
  
Filter-sort the list:
  - By default (by date of addition, from new to old),
  - At the price of min (from less to more),
  - At the price of max (from more to less),
  - By the title of the product  
  
Animation:
  - Adding/removing a card of product
  - Sorting the list  
  - Spinner/preloader before loading the list
  
Saving the list in localStorage to save it in case the page is reloaded  
In the mobile version, the markup is preserved, compliance with the layout is achieved by units of measurement in rem  
  
Create your own list of products online on gh-pages: https://marin-mar.github.io/Vue_Nuxt_App_Adding_Product/  
  
Download and fully test on your computer:
Required to run = Node.js v16.13.2
  
```bash
$ git clone <this-repository-name> # clone repository
$ cd <this-repository-name-folder-on-your-computer> # go to your folder
$ npm install # install dependencies
$ npm run dev # serve with hot reload at localhost:3000
$ npm run generate # generate static spa-project
$ npm run start # start Nuxt server
```
