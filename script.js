const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  let i=0;
  let sum = 0;
  let temp = [];
  let ans = [];
  while(i<arr.length){
    let element = arr[i];
    if(element <= n){
        sum += element;
        if(sum > n && temp.length){
            ans.push(temp);
            sum = element;
            temp = [element];
        }else{
            temp.push(element);
        }
    }else{
        if(sum<=n && temp.length){
            ans.push(temp);
            sum = 0;
            temp = [];
        }
    }
    i++;
  }
  if(sum<=n && temp.length){
    ans.push(temp);
  }
  // console.log(ans);
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
