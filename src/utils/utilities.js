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
