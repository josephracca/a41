/*
Joseph Racca
MC10
09.17.20

reviewed by Finnis Caldwell:
I Really like your set up  everything running very smooth on my end, it ran like a pro.
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;

public class mc4Script : MonoBehaviour
{

    public Text firstNum, secondNum, comparisonResults;

    private string firstInput, secondInput;

    private int num1, num2;

    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        firstInput = firstNum.text;
        secondInput = secondNum.text;

    }

    public void compareBtnClick()
    {

        int num1 = Convert.ToInt32(firstInput);
        int num2 = Convert.ToInt32(secondInput);

        if (num1 > num2)
        {
            comparisonResults.text = "Your first number is greater than your second number.\n\nYour second number is less than your first number.";
        }

        else if (num1 < num2)
        {
            comparisonResults.text = "Your first number is less than your second number.\n\nYour second number is less than your first number.";
        }
        else
        {
            comparisonResults.text = "Your first number is equal to your second number.\n\nYour second number is equal to your first number.";
        }
    }
}
