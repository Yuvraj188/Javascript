#include <iostream>
#include <iomanip>
int main()
{
    double n = 123.445;
    std::cout.precision(5);
    std::cout << n;
    return 0;
}