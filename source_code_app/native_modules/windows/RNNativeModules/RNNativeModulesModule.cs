using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Native.Modules.RNNativeModules
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNNativeModulesModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNNativeModulesModule"/>.
        /// </summary>
        internal RNNativeModulesModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNNativeModules";
            }
        }
    }
}
