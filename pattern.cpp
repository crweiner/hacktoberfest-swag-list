using namespace std;

int pattern(int n){
    int c;
    cout<<"Enter 0 if you want triangle\nEnter 1 if you want reverse triangle ";
    cin>>c;
    if (c==0)
    {
       for (int i = 0; i < n; i++)
       {
           for (int j = 0; j < i+1; j++)
           {
               cout<<"*";
           }
           cout<<"\n";
       }
    }
    else if (c==1)
    {
           for (int i = n; i > 0; i--)
       {
           for (int j = i; j > 0; j--)
           {
               cout<<"*";
           }
           cout<<"\n";
       }
    }
    else
    {
        cout<<"Invalid Input";
        return -1;
    }
    return 1;
}

int main(){
    while (true)
    {
        int no_of_lines;
        cout<<"Enter no of lines you want in pattern ";
        cin>>no_of_lines;
        if (no_of_lines>0)
        {
            int result=pattern(no_of_lines);
            // if (result!=-1){
            //     break;
            // }
        }
        else
        {
            cout<<"Invalid input";
        }

        int Choice;
        cout<<"Continue printing another pattern?? -- Press any no\nExit Program -- 0 ";
        cin>>Choice;
        if (Choice==0){
            cout<<"Thanks For Using Our Program!!!"<<endl;
            break;
        }
    }
    return 0;
}
