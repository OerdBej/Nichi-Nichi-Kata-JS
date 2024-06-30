const explorerData = [];
const parentContainer = document.querySelector('.parentContainer');
const parentFolder = document.getElementById('parentFolder');
const parentFile = document.getElementById('parentFile');

//getting an input and based on the type is going to append it when clicked
parentFolder.addEventListener('click', () => {
  //null will be dependent if its a folder or a file. null a folder and file is a files
  const item = createItemInput(
    explorerData,
    parentContainer,
    null,
    true
  );
  parentContainer.appendChild(item);
});

parentFolder.addEventListener('click', () => {
  //null will be dependent if its a folder or a file. null a folder and file is a files
  const item = createItemInput(
    explorerData,
    parentContainer,
    'file',
    true
  );
  parentContainer.appendChild(item);
});

//item is just the explored data input
function createItemInput(item, parentContainer, type, isFirstLevel) {}
