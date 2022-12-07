const maxArea = (height) =>{
    let left = 0, right = height.length - 1, max = 0;
    while(left < right){
     let value = Math.min(height[left],height[right]) * (right - left);
     max = max > value ? max : value;
     height[left] < height[right] ? left++ : right--;
    }
    return max
 }
 
 
 console.log(maxArea[1,8,6,2,5,4,8,3,7])