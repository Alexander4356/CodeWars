function bouncingBall(h, bounce, window) {
  let result = 0;
  let tempH;

  if (h > 1) {
    if (bounce > 0 && bounce < 1) {
      if (window < h) {
        tempH = h;
        while (true) {
          tempH *= bounce;
          console.log(tempH);
          result += 2;
          if (tempH <= window) {
            console.log(result);
            return (result -= 1);
          }
        }
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  } else {
    return -1;
  }
}
