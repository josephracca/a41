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

public class mc3Script : MonoBehaviour
{
    public Text nameInput, wakeTime, displayGreeting;

    private string userName, wakeUpInput;
    
    // Start is called before the first frame update
    void Start()
    {
        displayGreeting.text = "Sup? Let's talk about you and your sleeping habits...";
        
    }

    // Update is called once per frame
    void Update()
    {
        userName = nameInput.text;
        wakeUpInput = wakeTime.text;
    }

    public void displayGreetingClick(){
        displayGreeting.text = "Good morrow, " + userName + "! You woke up at " + wakeUpInput + "!? (Relatively) late.";


    }
}
