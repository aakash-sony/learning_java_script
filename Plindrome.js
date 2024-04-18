
function isPalindrome(string) 
{
    let j = string.length - 1;
    let count=0;
    for (let i = 0; i < j / 2; i++)
     {
        if (string[i] != string[j-i])
         {
            count++;
            return false;
        }
    }
    if(count==0)
    {
           return true;
    }
}
let a="racecar"
let b="Akash"
console.log(isPalindrome(a));
console.log(isPalindrome(b));


