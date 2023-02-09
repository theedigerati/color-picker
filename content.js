const pickerContainer = document.createElement("div");
pickerContainer.id = "arc-color-picker"
pickerContainer.style.display = "none"

const pickerContent = document.createElement("div");
pickerContent.id = "arc-color-picker-content";
pickerContent.innerText = "#e5e5e5"

const pickerCloseBtn = document.createElement("div")
pickerCloseBtn.id = "arc-color-picker-close"
pickerCloseBtn.innerText = "x"
pickerCloseBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  pickerContainer.style.display = "none"
})

pickerContainer.appendChild(pickerCloseBtn)
pickerContainer.appendChild(pickerContent)
document.body.prepend(pickerContainer);

const picker = new EyeDropper()
async function pick(){
  const color = await picker.open()
  pickerContainer.style.backgroundColor = color.sRGBHex
  pickerContent.innerText = color.sRGBHex
  navigator.clipboard.writeText(color.sRGBHex)
}
pickerContainer.addEventListener('click', pick)

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'e') {
    pickerContainer.style.display = "block"
  }
});
