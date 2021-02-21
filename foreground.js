const first = document.createElement('button');
first.innerText = "Put Text Into Quiz";
first.id = "first";

document.querySelector('body').appendChild(first);


first.addEventListener('click', () => {
  
  chrome.storage.local.set({"sentence": highlighted})
  console.log("Data Set.");
});
