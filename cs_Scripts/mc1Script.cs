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

public class mc1Script : MonoBehaviour
{
    public Text nameInput, lastName, welcomeGreeting;

    private string userNameT, lastNameT;
    
    // Start is called before the first frame update
    void Start()
    {
        welcomeGreeting.text = "Welcome! Tell me about yourself!";
        
    }

    // Update is called once per frame
    void Update()
    {
        userNameT = nameInput.text;
        lastNameT = lastName.text;
    }

    public void welcomeGreetingClick(){
        welcomeGreeting.text = "Nice to meet you, " + userNameT + " " + lastNameT + "!";


    }
}