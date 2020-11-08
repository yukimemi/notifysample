function notifyMe() {
  if (!("Notification" in window)) {
    alert("このブラウザーはデスクトップ通知に対応していません。");
  } else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("こんにちは！", {
      requireInteraction: true,
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("こんにちは！", {
          requireInteraction: true,
        });
      }
    });
  }
}
