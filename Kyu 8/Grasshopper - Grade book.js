function getGrade(s1, s2, s3) {
  let averageValue = (s1 + s2 + s3) / 3;
  console.log(averageValue);
  if (averageValue >= 90) {
    return "A";
  } else if (averageValue >= 80 && averageValue < 90) {
    return "B";
  } else if (averageValue >= 70 && averageValue < 80) {
    return "C";
  } else if (averageValue >= 60 && averageValue < 70) {
    return "D";
  } else if (averageValue < 60) {
    return "F";
  }
}
