#include<iostream>
using namespace std;

class Employee {
    public:
        string Name;
        string Company;
        int Age;

        void IntroduceYourself() {
            cout << "Name: " << Name << endl;
            cout << "Company: " << Company << endl;
            cout << "Age: " << Age << endl;
        }  
};

int main() {
    Employee emp1;
    emp1.Name = "John Doe";
    emp1.Company = "Tech Solutions";
    emp1.Age = 30;

    emp1.IntroduceYourself();
}