// Grab elements functions
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(
      `Somthing went, make sure that ${selector} exists or is typed correctly.`
    );
  };
  
  const selectAllElements = (selector) => {
    const element = document.querySelectorAll(selector);
    if (element) return element;
    throw new Error(
      `Somthing went, make sure that ${selector} exists or is typed correctly.`
    );
  };

  //Grabbing Elements
  const buttons = selectAllElements('.btn')
  const searchBox = selectElement('#search-item')
  const storeItems = selectAllElements('.store-item')

  //Show the selected items
  const showSelectedItems = (filter) => {
    storeItems.forEach(item => {
        if(filter === 'all'){
            item.style.display = 'block';
        } else {
            if(item.classList.contains(filter)){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            };
        };
    });
  };


  //Show the searched items
  const showSearchedItems = (filter) => {
    storeItems.forEach(item => {
        if(item.textContent.includes(filter)){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
  };

  //Give buttons the click eventListener 
  buttons.forEach(button => {
    button.addEventListener("click", (clickedButton) =>{
        //prevent the default link jump to top of page
        clickedButton.preventDefault()
        const selectedItem = clickedButton.target.dataset.filter
        showSelectedItems(selectedItem);
    });
  });

  //Give search input keyup eventListener
  searchBox.addEventListener('keyup', (pressedKey) => {
    const searchedText = pressedKey.target.value.toLowerCase().trim()
    showSearchedItems(searchedText);
  });
