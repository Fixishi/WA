
const req = new XMLHttpRequest();

function reqListener() {
    console.log(this.responseText);
 }
  
    req.addEventListener("load", reqListener);
    req.open("GET", "https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    req.send();


class LocalStorage {
    constructor(name, surname, salary) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
    }

    setItem(key, value) {
        this.data[key] = value;
    }

    getItem(key) {
        return this.data[key];
    }

    removeItem(key) {
        delete this.data[key];
    }
}


req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

// ...

// progress on transfers from the server to the client (downloads)
function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    // ...
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}

  