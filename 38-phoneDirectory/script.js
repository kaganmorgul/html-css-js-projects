const showAddBox = document.querySelector(".showAddBox");
const showEditBox = document.querySelector(".editPhoneBox");
const closeAddBox = document.querySelector(".closeAddBox");
const addPhoneBox = document.querySelector(".addPhoneBox");
const nameInput = document.querySelector(".nameInput");
const closeEditBox = document.querySelector(".closeEditBox");
const phoneInput = document.querySelector(".phoneInput");
const phoneList = document.querySelector(".phoneList");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const searchArea = document.querySelector(".searchArea");
const searchInput = document.querySelector(".searchInput");
const countOfPhone = document.querySelector(".countOfPhone");

searchIcon.addEventListener("click", () => {
  searchArea.classList.toggle("active");
});

showAddBox.addEventListener("click", () => {
  addPhoneBox.classList.add("active");
});

closeAddBox.addEventListener("click", () => {
  addPhoneBox.classList.remove("active");
});

closeEditBox.addEventListener("click", () => {
  showEditBox.classList.remove("active");
});

// add Person to phone list
addPhoneBox.addEventListener("submit", (e) => {
  createData();
  getDataFromLS();
});
const setLs = (data) => {
  let list = JSON.parse(localStorage.getItem("people"));
  localStorage.setItem("people", JSON.stringify([...(list || []), data]));
};
// create data list
let personID = 0;
const createData = () => {
  personID++;
  const data = {
    id: personID,
    name: nameInput.value,
    number: phoneInput.value,
  };
  setLs(data);
};

// localStorage settings
const getDataFromLS = () => {
  let data = JSON.parse(localStorage.getItem("people"));
  countOfPhone.innerHTML = data.length;
  let list = [];
  data &&
    data.forEach((e) => {
      personID = e.id;
      list += `
              <li class="person" id="${e.id}">
                <div class="personInfo">
                    <p class="name">${e.name}</p>
                    <p class="number">${e.number}</p>
                    <div class="personInfoIcons">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
              </li>
            `;
    });

  phoneList.innerHTML = list;
};

getDataFromLS();

// localStorage settings

// delete item
const trash = document.querySelectorAll(".fa-trash");
trash.forEach((i) => {
  i.addEventListener("click", () => {
    const item = i.parentElement.parentElement.parentElement;
    item.classList.add("remove");
    deletePhonefromLS(item);
    setTimeout(() => {
      item.remove();
    }, 1500);
  });
});
const deletePhonefromLS = (val) => {
  setTimeout(() => {
    location.reload();
  }, 2000);
  let data = JSON.parse(localStorage.getItem("people"));
  let newList = [];
  data.forEach((i) => {
    if (val.id != i.id) {
      newList.push(i);
    }
    localStorage.setItem("people", JSON.stringify(newList));
  });
};
// delete item

// edit item
const edit = document.querySelectorAll(".fa-pen-to-square");
const editNameInput = document.querySelector(".editNameInput");
const editPhoneInput = document.querySelector(".editPhoneInput");
const editIdInput = document.querySelector(".editIdInput");

edit.forEach((i) => {
  i.addEventListener("click", () => {
    showEditBox.classList.add("active");
    const item = i.parentElement.parentElement.parentElement;
    editPhonefromLS(item);
  });
});

const editPhonefromLS = (item) => {
  const data = JSON.parse(localStorage.getItem("people"));
  data.forEach((i) => {
    if (i.id == item.id) {
      editNameInput.value = i.name;
      editPhoneInput.value = i.number;
      editIdInput.value = i.id;
    }
  });
};

showEditBox.addEventListener("submit", (e) => {
  const data = JSON.parse(localStorage.getItem("people"));
  let newList = [];
  data.forEach((i) => {
    if (i.id == editIdInput.value) {
      const newVal = {
        id: parseInt(editIdInput.value),
        name: editNameInput.value,
        number: editPhoneInput.value,
      };
      i = newVal;
    }
    newList.push(i);
  });
  localStorage.setItem("people", JSON.stringify(newList));
});

// edit item
const names = document.querySelectorAll(".name");

searchInput.addEventListener("keyup", (e) => {
  names.forEach((i) => {
    if (i.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
      i.parentElement.parentElement.style.display = "";
    } else {
      i.parentElement.parentElement.style.display = "none";
    }
  });
});
