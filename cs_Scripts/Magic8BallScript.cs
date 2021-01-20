/*
Joseph Racca
originally: Mini Challenge #9: Magic 8 Ball
now: MC10

reviewed by Finnis Caldwell:
I Really like your set up  everything running very smooth on my end, it ran like a pro.
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;


public class Magic8BallScript : MonoBehaviour
{
    // Start is called before the first frame update
    public Text Responses;

    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    
    public void BtnAction()
    {
        PickRandomResponse();
    }
    void PickRandomResponse()
    {
        string[] responses = new string[] {"It is certain.","It is decidedly so.","Without a doubt.","Yes – definitely.","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again.","Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."};
        string randomResponse = responses[Random.Range(0,responses.Length)];
        Responses.text = randomResponse;
    }

    public void gotoScene(string sceneName){
        SceneManager.LoadScene(sceneName);
    }     
}
