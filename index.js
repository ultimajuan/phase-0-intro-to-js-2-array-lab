const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    
    cats.push("Ralph");

}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
  name = [...cats, "Broom"]
  return name
}

function prependCat(name) {
    name = ["Arnold", ...cats, ]
    return name
  }

function removeLastCat(name) {
    name = cats.slice(0, cats.length -1)
    return name
  }

function removeFirstCat(name) {
    name = cats.slice(1)
    return name
}