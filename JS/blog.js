// pagination

window.addEventListener("load", (event) => {
  let current_page = 1;
  let steps = 5;
  let blog_card = document.querySelectorAll(".blog_card_inner_inner");
  let blog_card_all = Array.from(blog_card);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let myactivePage = +urlParams.get("page") === 0 ? 1 : +urlParams.get("page");
  let activePage = myactivePage;  // console.log(currentPage);

  
  let pageSpan = document.querySelector(".blog_page");
  let pagesCount = Math.ceil(blog_card_all.length / steps);

  function DisplayList (items, steps, page) {
    page--;
    let start = steps * page;
    let end =start + steps;
    let paginatedItems = items.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];

      item.classList.add("blog_card_active");
      // item.classList.remove("blog_card_active")

    }
  }
 

 function SetupPagination (items, pageSpan, steps,page) {
    pageSpan.innerHTML = '';
     let pagesCount = Math.ceil(items.length / steps);
     for(let i=1; i < pagesCount+1; i++ ) {
        let btn = PaginationButton (i, items, pageSpan, steps);
        pageSpan.appendChild(btn);
      }

    let currentItemLi = document.querySelector(".paginationItem_active");
    let currentPage = +currentItemLi.innerText;

    let liElCur = document.querySelectorAll(".paginationItem");
    let allliElCur = Array.from(liElCur);

  if (urlParams.has("page") == false) {
    console.log('yes')
      const nextURL = `?page=${activePage}`;
      const nextTitle = activePage + 1;
      window.history.replaceState(null, nextTitle, nextURL);
    } else {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      let myactivePage =
        +urlParams.get("page") === 1 ? 1 : +urlParams.get("page");
      let activePage = myactivePage;

    }
 }

function PaginationButton (page, items, pageSpan, row_page) {
  let ulEl = document.createElement("ul");
      ulEl.classList.add("paginationList");
  let liEl = document.createElement("li");
  liEl.classList.add("paginationItem");
  liEl.innerText = page;
  ulEl.appendChild(liEl);
  
  if (current_page == page) {
    liEl.classList.add("paginationItem_active");
  } 

  liEl.addEventListener("click", function () {
    // page--;
    // let start = row_page * page;
    // let end =start + row_page;
    // let paginatedItems = items.slice(start, end);
    // for (let i = 0; i < paginatedItems.length; i++) {
    //   let item = paginatedItems[i];
    //   item.classList.remove("blog_card_active");

    // }

    DisplayList (items, steps, page); 



    let currentItemLi = document.querySelector(".paginationItem_active");
    let currentPage = +currentItemLi.innerText;
     const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    let myactivePage =
         +urlParams.get("page") === 1 ? 1 : +urlParams.get("page"); 
     currentPage == page;
     
     currentItemLi.classList.remove("paginationItem_active");
     liEl.classList.add("paginationItem_active");

     activePage = page;
     const nextURL = `?page=${activePage}`;
     const nextTitle = activePage;
     window.history.replaceState(null, nextTitle, nextURL);


    })
  return liEl;

}





DisplayList (blog_card_all, steps, current_page);

SetupPagination (blog_card_all, pageSpan, steps,current_page)


//  let liElCur = document.querySelectorAll(".paginationItem");
//   let allliElCur = Array.from(liElCur);

    // allliElCur.forEach((elem) =>{
    //   elem.addEventListener("click", function (event) {
    //   // const queryString = window.location.search;
    //   //     const urlParams = new URLSearchParams(queryString);
    //   //     let myactivePage =
    //   //       +urlParams.get("page") === 1 ? 1 : +urlParams.get("page");

    //         if (myactivePage == activePage){
    //           displayList (items,pageSpan, row_page, page);

    //         }
        
    //       })
    // })






  // let ulEl = document.createElement("ul");
  // ulEl.classList.add("paginationList");
  // // console.log(pagesCount);

  // for (let i = 0; i < pagesCount; i++) {
  //   // console.log(data[20].userId);
  //   let liEl = document.createElement("li");
  //   liEl.classList.add("paginationItem");
  //   liEl.innerText = i + 1;
  //   let activePage = i + 1;
  //   ulEl.appendChild(liEl);
  //   if (activePage == 1) {
  //     liEl.classList.add("paginationItem_active");
  //     liEl.dataset.name = 1;
  //   }
  // }
  // pageSpan.appendChild(ulEl);

  // let currentItemLi = document.querySelector(".paginationItem_active");
  // let currentPage = +currentItemLi.innerText;

  // if (currentPage == activePage) {
  //   for (let i = 1; i <= steps; i++) {
  //     let iAct = (i - 1) * activePage;
  //     blog_card_all[iAct].classList.add("blog_card_active");
  //     // blog_card_all[iAct].classList.remove("blog_card_active");
  //   }
  // }

  // let liElCur = document.querySelectorAll(".paginationItem");
  // let allliElCur = Array.from(liElCur);
  // if (urlParams.has("page") == false) {
  //   const nextURL = `?page=${activePage}`;
  //   const nextTitle = activePage + 1;
  //   window.history.replaceState(null, nextTitle, nextURL);
  // } else {
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   let myactivePage =
  //     +urlParams.get("page") === 1 ? 1 : +urlParams.get("page");
  //   let activePage = myactivePage;

  //   allliElCur.forEach((elem) => {
  //     if (elem.innerText == activePage) {
  //       // console.log(activePage);
  //       currentItemLi.classList.remove("paginationItem_active");
  //       elem.classList.add("paginationItem_active");
  //     }
  //   });
  // }

  // allliElCur.forEach((elem) => {
  //   elem.addEventListener("click", function (event) {
  //     const queryString = window.location.search;
  //     const urlParams = new URLSearchParams(queryString);
  //     let myactivePage =
  //       +urlParams.get("page") === 1 ? 1 : +urlParams.get("page");
  //     let activePage = myactivePage;
  //     countliEl = +elem.innerText;

  //     if (myactivePage == activePage) {
  //       let stepPage = steps * countliEl;
  //       let startPage = stepPage - 10;
  //       console.log(startPage);
  //       console.log(stepPage);
  //       for (let i = startPage; i <= stepPage; i++) {
  //         // console.log(blog_card_all)
  //         let nombpage = i;
  //         let iAct = i-10;
  //         // let blog = blog_card_all[i];
  //         console.log(iAct);
  //         blog_card_all[iAct].classList.remove("blog_card_active");
  //         blog_card_all[i].classList.add("blog_card_active");
  //       }
  //     }

  //     if (event.target.classList.contains("paginationItem")) {
  //       countliEl = +elem.innerText;
  //     }

  //     let currentItemLi = document.querySelector(".paginationItem_active");
  //     currentItemLi.classList.remove("paginationItem_active");
  //     elem.classList.add("paginationItem_active");
  //     activePage = countliEl;
  //     const nextURL = `?page=${activePage}`;
  //     const nextTitle = activePage;
  //     window.history.replaceState(null, nextTitle, nextURL);
  //   });
  // });


  // function displayList (items, row_page, page) {
  //   let start = row_page * page;
  //   let end =start +row_page;
  //   let paginatedItems = items.slice(start, end);
  //   for (let i = 0; i < paginatedItems.length; i++) {
  //     let item = paginatedItems[i];
  //     item.classList.add("blog_card_active");
  //   }

    
  
    
  
   
  // }
  // displayList (blog_card_all, steps, current_page)
});
