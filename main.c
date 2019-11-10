//
//  main.c
//  3:to do sum of all array elements that are odd
//
//  Created by APPLE on 9/27/18.
//  Copyright © 2018 APPLE. All rights reserved.
//

#include<stdio.h>

int main()
{
    int Size, i, a[10];
    int Even_Sum = 0, Odd_Sum = 0;
    
    printf("\n Please Enter the Size of an Array : ");
    scanf("%d", &Size);
    
    printf("\nPlease Enter the Array Elements\n");
    for(i = 0; i < Size; i++)
    {
        scanf("%d", &a[i]);
    }
    
    for(i = 0; i < Size; i ++)
    {
        if(a[i] % 2 == 0)
        {
            Even_Sum = Even_Sum + a[i];
        }
        else
        {
            Odd_Sum = Odd_Sum + a[i];
        }
    }
    
    printf("\n The Sum of Even Numbers in this Array = %d ", Even_Sum);
    printf("\n The Sum of Odd Numbers in this Array = %d ", Odd_Sum);
    return 0;
}
