//#include <iostream>
//
//
//    int main()
//    {
//        for (;;)
//        {
//
//
//
//            std::cout << "Enter a number : ";
//            float x = 0;
//            float y = 0;
//            std::cin >> x;     if (x == 67) return 0;
//            if (x == 0.5) {
//                y = (std::pow(x, 3) + 5 * std::pow(x, 2));
//                std::cout << "Result: " << y << std::endl;
//            }
//
//            else {
//                if (x >= -32) {
//                    if (x > 10) {
//                        y = (std::pow(x, 2) - 3);
//                        std::cout << "Result: " << y << std::endl;
//                    }
//                    else {
//                        if (x < -20)
//                        {
//                            y = (std::pow(x, 2) - 3);
//                            std::cout << "Result: " << y << std::endl;
//                        }
//                        else {
//                            std::cout << "Number is out of range!" << std::endl;
//                        }
//
//                    }
//                }
//                else {
//                    std::cout << "Number is out of range!" << std::endl;
//                }
//
//            }
//
//
//
//        }
//    }

#include <iostream>


int main()
    {
        for (;;)
        {



            std::cout << "Enter a number : ";
            float x = 0;
            float y = 0;
            std::cin >> x;     if (x == 67) return 0;
            if (x == 0.5) {
                y = (std::pow(x, 3) + 5 * std::pow(x, 2));
                std::cout << "Result: " << y << std::endl;
            }

            else {
                if ((x >= -32 && x < -20) || (x > 10)) {
                    y = (std::pow(x, 2) - 3);
                    std::cout << "Result: " << y << std::endl;
                }
            else {
                std::cout << "Number is out of range!" << std::endl;
                 }
            }
        }



    }