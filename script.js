const ave = (s1, s2, s3) => (s1 + s2 + s3) / 3;
const ave1 = ave(100, 100, 100);
const ave2 = ave(100, 100, 100);

const win = (t1, t2) => {
  if (t1 / 2 >= t2) {
    console.log(`team 2 wins with ${t1} vs ${t2}`);
  } else if (t2 / 2 >= t1) {
    console.log(`team 1 wins with ${t1} vs ${t2}`);
  } else console.log("No team  wins");
};
win(100, 50);
