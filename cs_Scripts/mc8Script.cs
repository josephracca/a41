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


public class mc8Script : MonoBehaviour
{
    public GameObject menuPanel, yourChoicePanel, gamePlayScreenPanel;

    public Text userInput, displayComparison, choiceFieldsConfirm, firstNumber, secondNumber;
    private string userGuessT, firstNumberT, secondNumberT;


    int numberGuesses;

    int[] levelEasy = new int[2] { 1, 11 };
    int[] levelMedium = new int[2] { 1, 51 };
    int[] levelHard = new int[2] { 1, 101 };

    void Start()
    {
        gamePlayScreenPanel.SetActive(false);
        menuPanel.SetActive(true);
        yourChoicePanel.SetActive(false);

    }

    // Update is called once per frame
    void Update()
    {

    }

    public void returnToLvls(){
        gamePlayScreenPanel.SetActive(false);
        menuPanel.SetActive(true);
        yourChoicePanel.SetActive(false);
    }

    int rNumber;
    public void easyBtnClick()
    {
        gamePlayScreenPanel.SetActive(true);
        menuPanel.SetActive(false);
        yourChoicePanel.SetActive(false);
        rNumber = UnityEngine.Random.Range(levelEasy[0], levelEasy[1]);

    }

    public void mediumBtnClick()
    {
        gamePlayScreenPanel.SetActive(true);
        menuPanel.SetActive(false);
        yourChoicePanel.SetActive(false);
        rNumber = UnityEngine.Random.Range(levelMedium[0], levelMedium[1]);

    }

    public void hardBtnClick()
    {
        gamePlayScreenPanel.SetActive(true);
        menuPanel.SetActive(false);
        yourChoicePanel.SetActive(false);
        rNumber = UnityEngine.Random.Range(levelHard[0], levelHard[1]);

    }

    /*
    
    public void choiceBtnClick()
    {
        gamePlayScreenPanel.SetActive(false);
        menuPanel.SetActive(false);
        yourChoicePanel.SetActive(true);

        firstNumber.text = "Pick your first number...";
        secondNumber.text = "Now, pick your second number...";

        if (x > y)
        {
            levelChoice = new int[2] { y, x + 1 };
            choiceFieldsConfirm.text = "You've selected a range between " + y + " and " + x + ".";
            rNumber = UnityEngine.Random.Range(levelChoice[0], levelChoice[1]);
        }

        else if (x < y)
        {
            levelChoice = new int[2] { x, y + 1 };
            choiceFieldsConfirm.text = "You've selected a range between " + x + " and " + y + ".";
            rNumber = UnityEngine.Random.Range(levelChoice[0], levelChoice[1]);
        }
        else if (x == y)
        {
            checkXAndY = false;
            choiceFieldsConfirm.text = "Let's try that again, pick 2 DIFFERENT numbers.";
        }

        checkNumber();//variables must be passed through here to check with the function

    }
    */

    public void checkNumber()
    {
        userGuessT = userInput.text;
        int actualUserGuess = System.Convert.ToInt32(userGuessT);
        numberGuesses++;

        if (actualUserGuess != rNumber)
        {
            if (actualUserGuess < rNumber)
            {
                displayComparison.text = "Your guess is lower than the correct number.";
            }
            else if (actualUserGuess > rNumber)
            {
                displayComparison.text = "Your guess is higher than the correct number.";
            }
        }
        else if (actualUserGuess == rNumber)
        {
            displayComparison.text = "You guessed right!\nIt took you " + numberGuesses + " guess(es).";
        }
    }
}
