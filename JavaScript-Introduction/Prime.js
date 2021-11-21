let number = 23;
let flag = true;

for (let i = 2; i * i < number; i++) {
    if (number % i == 0)
    {
        flag = false;
        break;
    }
}

if (flag == true)
{
    console.log(number, "is prime");
}
else
{
    console.log(number, "is not prime");
}