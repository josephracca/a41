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

public class mc2Script : MonoBehaviour
{

    public Text inputNum1;
    public Text inputNum2;
    public Text displaySum;

    private string enteredNum1;
    private string enteredNum2;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame    
    void Update()
    {
        enteredNum1 = inputNum1.text;
        enteredNum2 = inputNum2.text;

        if (enteredNum1 == null && enteredNum1 == null)
        {
        }

        else
        {
            int num1 = Convert.ToInt32(enteredNum1);
            int num2 = Convert.ToInt32(enteredNum2);

            int sum = num1 + num2;
            displaySum.text = "The sum of your two numbers is " + sum + ".";
        }
    }
}
