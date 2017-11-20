
package ui.taptargetview;

import android.app.Activity;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.util.Log;

import com.facebook.common.internal.Objects;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;

import com.getkeepsafe.taptargetview.TapTargetSequence;
import com.getkeepsafe.taptargetview.TapTargetView;
import com.getkeepsafe.taptargetview.TapTarget;

import java.util.ArrayList;
import java.util.List;


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
  public void ShowSequence(final ReadableArray views, final ReadableMap props, final Promise promise) {
      final Activity activity = this.getCurrentActivity();
      final List<TapTarget> targetViews = new ArrayList<TapTarget>();

      for (int i = 0;i < views.size();i++) {
          int view = views.getInt(i);
          targetViews.add(this.generateTapTarget(view, props.getMap(String.valueOf(view))));
      }

      this.getCurrentActivity().runOnUiThread(new Runnable() {
          @Override
          public void run() {
              TapTargetSequence tapTargetSequence = new TapTargetSequence(activity).targets(targetViews);
              tapTargetSequence.continueOnCancel(true);
              tapTargetSequence.start();
          }
      });

  }

  @ReactMethod
  public void ShowFor(final int view, final ReadableMap props, final Promise promise) {
      final Activity activity = this.getCurrentActivity();
      final TapTarget targetView = generateTapTarget(view, props);

      this.getCurrentActivity().runOnUiThread(new Runnable() {
          @Override
          public void run() {
            TapTargetView.showFor(activity, targetView);
          }
    });
  }

  private TapTarget generateTapTarget(final int view, final ReadableMap props) {
      final Activity activity = this.getCurrentActivity();

      final String title = props.getString("title");
      final String description = props.getString("description");

      int outerCircleColor = 0;
      int targetCircleColor = 0;
      int titleTextColor = 0;
      int descriptionTextColor = 0;
      int textColor = 0;
      int dimColor = 0;

      // Color Codes
      try { outerCircleColor = activity.getResources().getIdentifier(props.getString("outerCircleColor"), "color", activity.getPackageName()); } catch (Exception e) {}
      try { targetCircleColor = activity.getResources().getIdentifier(props.getString("targetCircleColor"), "color", activity.getPackageName()); } catch (Exception e) {}
      try { titleTextColor = activity.getResources().getIdentifier(props.getString("titleTextColor"), "color", activity.getPackageName()); } catch (Exception e) {}
      try { descriptionTextColor = activity.getResources().getIdentifier(props.getString("descriptionTextColor"), "color", activity.getPackageName()); } catch (Exception e) {}
      try { textColor = activity.getResources().getIdentifier(props.getString("textColor"), "color", activity.getPackageName()); } catch (Exception e) {}
      try { dimColor = activity.getResources().getIdentifier(props.getString("dimColor"), "color", activity.getPackageName()); } catch (Exception e) {}

      final int finalOuterCircleColor = outerCircleColor;
      final int finalTargetCircleColor = targetCircleColor;
      final int finalTitleTextColor = titleTextColor;
      final int finalDescriptionTextColor = descriptionTextColor;
      final int finalTextColor = textColor;
      final int finalDimColor = dimColor;

      //Other Props
      float outerCircleAlpha = 0.96f;
      int titleTextSize = 20;
      int descriptionTextSize = 10;
      boolean drawShadow = true;
      boolean cancelable = true;
      boolean tintTarget = true;
      boolean transparentTarget = true;
      int targetRadius = 60;

      try { outerCircleAlpha = Float.valueOf(props.getString("outerCircleAlpha")); } catch (Exception e) {}
      try { titleTextSize = Integer.valueOf(props.getString("titleTextSize")); } catch (Exception e) {}
      try { descriptionTextSize = Integer.valueOf(props.getString("descriptionTextSize")); } catch (Exception e) {}
      try { drawShadow = Boolean.valueOf(props.getString("drawShadow")); } catch (Exception e) {}
      try { cancelable = Boolean.valueOf(props.getString("cancelable")); } catch (Exception e) {}
      try { tintTarget = Boolean.valueOf(props.getString("tintTarget")); } catch (Exception e) {}
      try { transparentTarget = Boolean.valueOf(props.getString("transparentTarget")); } catch (Exception e) {}
      try { targetRadius = Integer.valueOf(props.getString("targetRadius")); } catch (Exception e) {}

      float finalOuterCircleAlpha = outerCircleAlpha;
      int finalTitleTextSize = titleTextSize;
      int finalDescriptionTextSize = descriptionTextSize;
      boolean finalDrawShadow = drawShadow;
      boolean finalCancelable = cancelable;
      boolean finalTintTarget = tintTarget;
      boolean finalTransparentTarget = transparentTarget;
      int finalTargetRadius = targetRadius;


      //Populate Props
      TapTarget targetView = TapTarget.forView(activity.findViewById(view), title, description);

      if (finalOuterCircleColor != 0) targetView.outerCircleColor(finalOuterCircleColor);
      if (finalTargetCircleColor != 0) targetView.targetCircleColor(finalTargetCircleColor);
      if (finalTitleTextColor != 0) targetView.titleTextColor(finalTitleTextColor);
      if (finalDescriptionTextColor != 0) targetView.descriptionTextColor(finalDescriptionTextColor);
      if (finalTextColor != 0) targetView.textColor(finalTextColor);
      if (finalDimColor != 0) targetView.dimColor(finalDimColor);


      targetView.outerCircleAlpha(finalOuterCircleAlpha);
      targetView.titleTextSize(finalTitleTextSize);
      targetView.descriptionTextSize(finalDescriptionTextSize);
      targetView.drawShadow(finalDrawShadow);
      targetView.cancelable(finalCancelable);
      targetView.tintTarget(finalTintTarget);
      targetView.transparentTarget(finalTransparentTarget);
      targetView.targetRadius(finalTargetRadius);

      return targetView;
  }
}