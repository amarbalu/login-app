import { useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useDispatch } from "react-redux";
import { logout } from "./reduxUtils/action";

export default function IdleTimer() {
  const dispatch = useDispatch();
  // Set timeout values
  const timeout = 1000 * 60;
  const promptTimeout = 1000 * 60;

  // Modal open state
  const [open, setOpen] = useState(false);

  // Time before idle
  const [remaining, setRemaining] = useState(0);

  const onPrompt = () => {
    // onPrompt will be called after the timeout value is reached
    // In this case 30 minutes. Here you can open your prompt.
    // All events are disabled while the prompt is active.
    // If the user wishes to stay active, call the `reset()` method.
    // You can get the remaining prompt time with the `getRemainingTime()` method,
    setOpen(true);
    setRemaining(promptTimeout);
  };

  const onIdle = () => {
    // onIdle will be called after the promptTimeout is reached.
    // In this case 30 seconds. Here you can close your prompt and
    // perform what ever idle action you want such as log out your user.
    // Events will be rebound as long as `stopOnMount` is not set.
    setOpen(false);
    setRemaining(0);
    dispatch(logout());
  };

  const onActive = () => {
    // onActive will only be called if `reset()` is called while `isPrompted()`
    // is true.  Here you will also want to close your modal and perform
    // any active actions.
    setOpen(false);
    setRemaining(0);
  };

  const { getRemainingTime, isPrompted, reset } = useIdleTimer({
    timeout,
    promptTimeout,
    onPrompt,
    onIdle,
    onActive,
  });

  const handleStillHere = () => {
    setOpen(false);
    reset();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPrompted()) {
        setRemaining(Math.ceil(getRemainingTime() / 1000));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="modal"
      style={{ display: open ? "block" : "none", backgroundColor: "lightgrey" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              Logging you out in {remaining} seconds.Do want to continue?
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={handleStillHere}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
