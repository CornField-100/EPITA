// select the toggle button
const toggleBtn = document.querySelector(".header__toggle-btn")
// select the header
const header = document.querySelector(".header")

toggleBtn.addEventListener("click", () => {
	header.classList.toggle("header-open")
	// add or remove the "header-open" class from the header element
	// write your code here
	console.log("run the function here !!")
})
