using UnityEngine;

//Abstract class that contains all the functions that any player state should implement.
public abstract class PlayerState
{
    public PlayerController playerController;

    public PlayerState(PlayerController playerController)
    {
        this.playerController = playerController;
    }

    public abstract void Entry();
    public abstract void GetDestination(Vector3 tappedPosition);
    public abstract void HandleTrigger(Collider other);
    public abstract void RunAndShoot();
    public abstract void UpdateCameraAndLine();

}
