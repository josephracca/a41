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


public class mc7Script : MonoBehaviour
{

    public Text userInput, reversedOutput;
    private string inputInfo, reversedOutputText, reverse;

    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        inputInfo = userInput.text;
    }

    public void reverseClick()
    {

        reverse = "";
        for (int i = inputInfo.Length - 1; i >= 0; i--)
        {
            reverse = reverse + inputInfo[i];
        }

        reversedOutput.text = "So in reverse: " + reverse;
    }
}
