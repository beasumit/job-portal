const text = "job opportunities and internships.";

// function to animate the text

function typeWriter(text, i, speed, element) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text, i, speed, element);
    }, speed);
  }else{
    setTimeout(()=>{
      element.innerHTML="";
      typeWriter(text,0,speed,element);

    },speed*1);

  }
}

// call the function with parameter

window.onload = () => {
  const speed = 80;
  const element = document.querySelector("#typeWriter");
  typeWriter(text, 0, speed, element);
};

console.log("hello")