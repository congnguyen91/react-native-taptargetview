using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Tap.Target.View.RNTapTargetView
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNTapTargetViewModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNTapTargetViewModule"/>.
        /// </summary>
        internal RNTapTargetViewModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNTapTargetView";
            }
        }
    }
}
