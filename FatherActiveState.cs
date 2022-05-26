using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

//This player state controls the enemy when it is both in normal and power up state.
public class PlayerActiveState : PlayerState
{

    public PlayerActiveState(PlayerController playerController) :
        base(playerController) { }

    public override void Entry() { }

    public override void GetDestination(Vector3 tappedPosition)
    {
        playerController.FindTargetPath(tappedPosition);
    }

    public override void HandleTrigger(Collider other) { }

    public override void RunAndShoot() { }

    public override void UpdateCameraAndLine() {
        playerController.SetCameraTarget();
        playerController.DrawPathToDestination();
    }

}