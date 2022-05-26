using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//This player state controls the enemy when it is in power up state.
public class PlayerPowerUpState : PlayerActiveState
{
    public PlayerPowerUpState(PlayerController playerController) : base(playerController) { }

    public override void Entry()
    {
        playerController.IncreasePlayerSpeed();
        playerController.blueCircleShield.SetActive(true);
    }

    public override void GetDestination(Vector3 tappedPosition) { base.GetDestination(tappedPosition); }

    public override void HandleTrigger(Collider other) { base.HandleTrigger(other); }

    public override void RunAndShoot() { playerController.EnablePowerUpShooting(); }

    public override void UpdateCameraAndLine() { base.UpdateCameraAndLine(); }

}
