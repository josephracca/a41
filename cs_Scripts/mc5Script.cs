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

public class mc5Script : MonoBehaviour
{

    public GameObject inPutPanel;
    public GameObject outPutPanel;

    public Text adj1, adj2, noun1, noun2, noun3, verb1, verb2, verb3, plNoun1, plNoun2, plNoun3, plNoun4, plNoun5;
    public string adj1T, adj2T, noun1T, noun2T, noun3T, verb1T, verb2T, verb3T, plNoun1T, plNoun2T, plNoun3T, plNoun4T, plNoun5T;

    public Text storyGenerated;



    // Start is called before the first frame update
    void Start()
    {
        inPutPanel.SetActive(true);
        outPutPanel.SetActive(false);
        adj1T="(YOU left this BLANK!)";
        adj2T="(YOU left this BLANK!)";
        noun1T="(YOU left this BLANK!)";
        noun2T="(YOU left this BLANK!)";
        noun3T="(YOU left this BLANK!)";
        verb1T="(YOU left this BLANK!)";
        verb2T="(YOU left this BLANK!)";
        verb3T="(YOU left this BLANK!)";
        plNoun1T="(YOU left this BLANK!)";
        plNoun2T="(YOU left this BLANK!)";
        plNoun3T="(YOU left this BLANK!)";
        plNoun4T="(YOU left this BLANK!)";
        plNoun5T="(YOU left this BLANK!)";

    }

    // Update is called once per frame
    void Update()
    {
        adj1T=adj1.text;
        adj2T=adj2.text;
        noun1T=noun1.text;
        noun2T=noun2.text;
        noun3T=noun3.text;
        verb1T=verb1.text;
        verb2T=verb2.text;
        verb3T=verb3.text;
        plNoun1T=plNoun1.text;
        plNoun2T=plNoun2.text;
        plNoun3T=plNoun3.text;
        plNoun4T=plNoun4.text;
        plNoun5T=plNoun5.text;

    }

    public void generateBtn()
    {
        inPutPanel.SetActive(false);
        outPutPanel.SetActive(true);

        storyGenerated.text = "Spring is a(n) "
                            + adj1T + " time of the year to plant a(n) "
                            + noun1T + ", after the "
                            + adj2T + " frost. First, "
                            + verb1T + " the dirt using "
                            + plNoun1T + " and "
                            + plNoun2T + " so you can plant "
                            + plNoun3T + ". "
                            + plNoun4T + " "
                            + verb2T + ", "
                            + noun2T + " them, and watch them "
                            + verb3T + " until summer or fall. "
                            + plNoun5T + " grow in a few weeks, whereas Halloween "
                            + noun3T + " may take months but it's worth the wait!";
    }

    public void closeStoryBtn(){
        inPutPanel.SetActive(true);
        outPutPanel.SetActive(false);
    }
}
