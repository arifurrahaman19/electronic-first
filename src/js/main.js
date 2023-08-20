const selectElement = (selector, all = false) => {
	const select = document.querySelectorAll(selector);
	return all ? select : select[0];
};

//Select Elements
const navbarMenu = selectElement(".navbar__menu");
const navbarList = selectElement(".navmenu-list");
const searchBtn = selectElement("#search-btn");
const searchInputContainer = selectElement(".input-container");
const searchInputClose = selectElement(".input-container .close");
const searchCloseBtn = selectElement("#search-close-btn");
const megamenuContainer = selectElement(".navbar__menu--megamenu");
const navbarMenus = selectElement(".navmenu-list li button", true);
const navbarMenusListItm = selectElement(".navmenu-list li", true);
const mobileMenuBtn = selectElement("#mobile-menu");
const mainMenubar = selectElement(".navbar__menu-bar");

// Functions
function searchButtonHandler() {
	navbarList.classList.add("hidden");
	searchInputContainer.classList.remove("hidden");
	navbarMenu.classList.add("hidden-menubar");
	if (!megamenuContainer.classList.contains("hidden")) {
		megamenuContainer.classList.add("hidden");
	}
}

function searchCloseButtonHandler() {
	navbarMenu.classList.remove("hidden-menubar");
	searchInputContainer.classList.add("hidden");
	navbarList.classList.remove("hidden");
}

function showMegaMenu(indx, e) {
	const classList = megamenuContainer.classList;

	if (classList.contains("hidden")) {
		megamenuContainer.classList.remove("hidden");
		navbarMenusListItm[indx].classList.add("active");
	} else {
		megamenuContainer.classList.add("hidden");
		navbarMenusListItm[indx].classList.remove("active");
	}

	navbarMenusListItm.forEach((itm, i) => {
		if (i === indx) {
			itm.classList.add("active");
		} else if (i !== indx) {
			itm.classList.remove("active");
		}
	});
}

function mobileMenuButtonHandler() {
	mainMenubar.classList.remove("hidden");
	mainMenubar.classList.add("mobile-menu-style");
}

// Add click event in all menu items
navbarMenus.forEach((itm, i) => {
	itm.addEventListener("click", (e) => showMegaMenu(i, e));
});
// End Functions

// Event Listeners
searchBtn.addEventListener("click", searchButtonHandler);
searchCloseBtn.addEventListener("click", searchCloseButtonHandler);
mobileMenuBtn.addEventListener("click", mobileMenuButtonHandler);

// Hide megamenu when clicked outside
document.addEventListener("click", (evt) => {
	const flyoutEl = document.getElementById("megamenu");
	const menuBar = document.getElementById("menubar");
	let targetEl = evt.target;
	do {
		if (targetEl == flyoutEl || targetEl == menuBar) {
			return;
		}
		targetEl = targetEl.parentNode;
	} while (targetEl);
	megamenuContainer.classList.add("hidden");
	navbarMenusListItm.forEach((item) => item.classList.remove("active"));
});
