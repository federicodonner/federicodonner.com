import detectBrowserLanguage from "detect-browser-language";

// Store data in LS
export function storeInLS(key, datosGuardar) {
  localStorage.setItem(key, datosGuardar);
  return datosGuardar;
}

// Reads from LS
export function readFromLS(key) {
  return localStorage.getItem(key);
}

// Deletes from LS
export function deleteFromLS(key) {
  return localStorage.removeItem(key);
}

// Determines user language
// Tries to find it in LS, if found, returns it
// if not found, determines browser language and stores it
export function setBrowserLanguage() {
  if (readFromLS(process.env.REACT_APP_LS_IDIOMA)) {
    return readFromLS(process.env.REACT_APP_LS_IDIOMA);
  }
  var idioma = null;
  if (detectBrowserLanguage().toLowerCase().includes("es")) {
    idioma = "es";
  } else {
    idioma = "en";
  }
  return storeInLS(process.env.REACT_APP_LS_IDIOMA, idioma);
}

// Overwrites language in LS when the user selects it
export function setAppLanguage(idioma) {
  return storeInLS(process.env.REACT_APP_LS_IDIOMA, idioma);
}

export function downloadFile(file, updateStack) {
  setTimeout(() => {
    updateStack({ type: "consoleTx", text: "downloading" });
    // console.log("downloadin " + file);
    // fetch("http://localhost:3000/downloads/Federico_Donner_CV.pdf")
    //   .then((resp) => resp.blob())
    //   .then((blob) => {
    //     const url = window.URL.createObjectURL(blob);
    //     const a = document.createElement("a");
    //     a.style.display = "none";
    //     a.href = url;
    //     // the filename you want
    //     a.download = "todo-1.pdf";
    //     document.body.appendChild(a);
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //     return "downloading";
    //   })
    //   .catch(() => alert("oh no!"));
  }, 1000);
}
