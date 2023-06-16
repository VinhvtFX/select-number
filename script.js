let question = Math.trunc(Math.random() * 20 + 1);
console.log(question);

// KHI CLICK VÀO CHECK
let score = 20;
let heightscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  let number = document.querySelector(".number").value;
  console.log(number);
  // NẾU KHÔNG NHẠP SỐ VÀO.
  if (number == "") {
    document.querySelector(".star-guessing").innerHTML = "No number";
  } else {
    //KHI CO NHẬP SỐ VÀO.
    // Số nhập vào đúng bằng số cần đoán.
    if (number == question) {
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".star-guessing").innerHTML = "Correct number";
      document.querySelector(".question").innerHTML = question;
      //Xét điểm cao nhất.
      if (score > heightscore) {
        heightscore = score;
      }
      document.querySelector(".height-score").innerHTML =
        "Height Score: " + heightscore;
      // Trường hợp số nhập vào khác số dự đoán.
    } else if (number !== question) {
      score--;
      //Khi còn điểm để chơi
      if (score > 0) {
        document.querySelector(".score").innerHTML = "Score: " + score;
        if (number > question) {
          document.querySelector(".star-guessing").innerHTML = "Too Hight";
        } else {
          document.querySelector(".star-guessing").innerHTML = "Too Low";
        }
        // KHi hết điểm để chơi
      } else {
        document.querySelector(".star-guessing").innerHTML = "Game over!";
        document.querySelector(".doanso").innerHTML = "GAME OVER";
        document.querySelector(".doanso").style.fontSize = "100px";
        document.querySelector(".score").innerHTML = "Score: " + 0;
      }
    }
  }
});

// KHI CLICK VÀO AGAIN.
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#000000b6";
  document.querySelector(".star-guessing").innerHTML = "Star guessing...";

  document.querySelector(".question").innerHTML = "?";
  question = Math.trunc(Math.random() * 20 + 1);
  console.log(question);

  // Đưa số lượt chơi về 20.
  document.querySelector(".score").innerHTML = "Score: " + 20;
  score = 20;
});
