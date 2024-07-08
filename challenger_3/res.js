
function compareLength(original, modified) {
    const originalLength = original.length;
    const modifiedLength = modified.length;
  
    // Recorrer la longitud de la cadena más corta
    for (let i = 0; i < Math.min(originalLength, modifiedLength); i++) {
      if (original[i] !== modified[i]) {
        return modified[i] || original[i];
      }
    }
  
    // Si no hay diferencias en la parte común, devolver el carácter extra
    if (originalLength < modifiedLength) {
      return modified[originalLength];
    } else if (originalLength > modifiedLength) {
      return original[modifiedLength];
    }
  
    // Si las cadenas son iguales
    return '';
}

const original = 'abcd'
const modified = 'abcde'

compareLength(original, modified);