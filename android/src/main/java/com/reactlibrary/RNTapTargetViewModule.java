
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNTapTargetViewModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNTapTargetViewModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNTapTargetView";
  }

  @ReactMethod
  public void ForView(ReadableMap config, Callback successCallback, Callback cancelCallback) {
      Activity currentActivity = getCurrentActivity();
  
      if (currentActivity == null) {
          cancelCallback.invoke("Activity doesn't exist");
          return;
      }
  }
}