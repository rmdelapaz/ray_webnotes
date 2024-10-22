function echo(word) {
  if (word.length > 1) {
    console.log(word.toUpperCase());

    let response = echo(word.slice(1));


    console.log(response);
    return word;
  } else {
    console.log(word.toUpperCase());
    return word;
  }

}

echo ("hello");
