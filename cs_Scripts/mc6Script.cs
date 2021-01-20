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


public class mc6Script : MonoBehaviour
{

    public Text numInput, endStatement;

    private string numInputText;


    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void checkNumber()
    {

        numInputText = numInput.text;
        int num1 = Convert.ToInt32(numInputText);

        if (String.IsNullOrEmpty(numInputText))
        {
            endStatement.text = "You've input nothing. Please enter a number.";
        }
        else if (num1 % 2 == 0)
        {
            endStatement.text = numInputText + " is even.";
        }
        else
        {
            endStatement.text = numInputText + " is odd.";
        }
    }
}
