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
using UnityEngine.Audio;

public class audioScript : MonoBehaviour
{
    //music starts over when you go back to the scene
    public static audioScript instance;
    
    void Awake(){
        //no have it check to see if there is audio there or not
        if (instance == null){
            DontDestroyOnLoad(this.gameObject);
            instance=this;
        }
        else if (instance != this){
            Destroy(gameObject);
        }
        
    }
    
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
