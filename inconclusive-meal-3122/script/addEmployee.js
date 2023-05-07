// Add Employee button
let overlays= document.querySelector("#overlay")
let addButton = document.querySelector("#add-Employee-emp");

addButton.addEventListener("click", () => {
 // employee_page.style.display = "none";
  add_emp_form.style.display = "inline";
 // delete_edit_div.style.display = "none";
  document.getElementById("add-Employee-form").classList.add("active");
  overlays.classList.add("active");
});


document.getElementById("emp_cancel").addEventListener("click" ,() =>{
  document.getElementById("add-Employee-form").classList.remove("active");
  overlays.classList.remove("active");
})